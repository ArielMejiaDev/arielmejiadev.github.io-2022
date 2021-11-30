function form() {
    return {
        subject: '',
        message: '',
        text: 'Send',
        submit() {
            this.submitting = true;
            this.text = 'Sending...';
            const contactForm = document.getElementById('contactForm');
            contactForm.setAttribute('action', `mailto:arielmejiadev@gmail.com?subject=${this.subject}&body=${this.message}`)
        }
    }
}
