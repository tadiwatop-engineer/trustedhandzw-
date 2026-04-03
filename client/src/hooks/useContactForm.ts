import { useState } from 'react';
import axios from 'axios';

export function useContactForm(endpoint: string) {
  const [form, setForm]       = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await axios.post(endpoint, form);
      setSuccess(true);
      setForm({});
    } catch (err: any) {
      const msg =
        err?.response?.data?.message ||
        'Something went wrong. Please try WhatsApp instead.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return { form, loading, success, error, handleChange, handleSubmit };
}