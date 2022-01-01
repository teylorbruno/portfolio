const contact = {
    content: `
        <div id="contact">
            <h2>Contact</h2>
            <form>
            <input type="text" id="subject" name="subject" min="10" max="100" placeholder="subject" />
            <input type="email" id="email" name="email" min="10" max="100" placeholder="email" />
            <textarea value="body"></textarea>
            <input type="submit" id="submit" name="submit" value="send" />
            </form>
        </div>
    `
}

export { contact };