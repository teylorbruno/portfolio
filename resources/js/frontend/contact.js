const contact = {
    content: `
        <div id="contact" action="" method="post">
            <h2>Contact</h2>
            <form id="contactForm">
                <input type="text" id="subject" name="subject" min="10" max="100" placeholder="subject" required />
                <input type="email" id="email" name="email" min="10" max="100" placeholder="email" required />
                <textarea cols="50" rows="5" min="20" required ></textarea>
                <input click="submitForm()" type="submit" form="contactForm" id="submitContact" value="send" />
            </form>
        </div>
    `,
    submitForm() {
        const submitBtn = document.getElementById('submitContact');
        debugger;
        const form = document.getElementById('contactForm');
        submitBtn.addEventListener('click', alert('formulaire envoyé!'));
    }
}

export { contact };