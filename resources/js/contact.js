const contact = {
    content: `
        <div id="contact">
            <h2>Contact</h2>
            <form action="submitForm" method="post">
            <input type="text" id="subject" name="subject" min="10" max="100" placeholder="subject" required />
            <input type="email" id="email" name="email" min="10" max="100" placeholder="email" required />
            <textarea cols="50" rows="5" required ></textarea>
            <input type="submit" id="submit" name="submit" value="send" />
            </form>
        </div>
    `,
    submitForm() {
        const submitBtn = document.getElementById('submit');
        submitBtn.addEventListener('click', alert('formulaire envoyé!'))
    }
}

export { contact };