import { useState } from 'react';
import type { FormEvent } from 'react';
import { Button } from '../common/Button';

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    projectType: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            projectType: '',
            message: '',
        });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-white p-8 md:p-12 border border-concrete-200 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-h3 mb-3 text-charcoal">Message Sent</h3>
                <p className="text-concrete mb-6">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <Button variant="secondary" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                </Button>
            </div>
        );
    }

    const inputClasses = "w-full px-4 py-3 border border-concrete-200 bg-white text-charcoal placeholder-concrete-400 focus:outline-none focus:border-charcoal transition-colors duration-200";
    const labelClasses = "block text-sm font-medium text-charcoal mb-2";
    const errorClasses = "text-sm text-red-600 mt-1";

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-concrete-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label htmlFor="name" className={labelClasses}>
                        Full Name <span className="text-amber-600">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`${inputClasses} ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="John Smith"
                    />
                    {errors.name && <p className={errorClasses}>{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="email" className={labelClasses}>
                        Email Address <span className="text-amber-600">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${inputClasses} ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="john@company.com"
                    />
                    {errors.email && <p className={errorClasses}>{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="phone" className={labelClasses}>
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="(206) 555-0123"
                    />
                </div>

                <div>
                    <label htmlFor="company" className={labelClasses}>
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Your Company"
                    />
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="projectType" className={labelClasses}>
                    Project Type
                </label>
                <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={inputClasses}
                >
                    <option value="">Select a project type</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="residential">Residential Development</option>
                    <option value="industrial">Industrial Facilities</option>
                    <option value="renovation">Renovation & Restoration</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="mb-8">
                <label htmlFor="message" className={labelClasses}>
                    Project Details <span className="text-amber-600">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputClasses} resize-none ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Tell us about your project..."
                />
                {errors.message && <p className={errorClasses}>{errors.message}</p>}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
        </form>
    );
}
