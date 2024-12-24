async function fetchUser() {
    const username = document.getElementById('username').value.trim();
    const userCard = document.getElementById('user-card');
    
    if (!username) {
        alert('Please enter a GitHub username');
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error('User not found');
        }

        const data = await response.json();

        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('name').innerText = data.name || 'No Name';
        document.getElementById('login').innerText = data.login;
        document.getElementById('url').innerText = data.html_url;
        document.getElementById('url').href = data.html_url;
        document.getElementById('blog').innerText = data.blog || 'No Blog';
        document.getElementById('blog').href = data.blog || '#';
        document.getElementById('city').innerText = data.location || 'No City';
        document.getElementById('email').innerText = data.email || 'No Email';
        document.getElementById('followers').innerText = data.followers;
        document.getElementById('following').innerText = data.following;

        userCard.style.display = 'flex';
    } catch (error) {
        alert(error.message);
        userCard.style.display = 'none';
    }
}
