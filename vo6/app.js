document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    /* dark mode toggle */
    const root = document.documentElement;
    const toggle = document.getElementById('themeToggle');
    const iconMoon = document.getElementById('iconMoon');

    function syncToggleUI() {
        if (!toggle || !iconMoon) return;

        const isDark = root.getAttribute('data-theme') === 'dark';
        toggle.setAttribute('aria-pressed', String(isDark));
        toggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
        iconMoon.innerHTML = isDark
            ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'
            : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    }

    if (toggle && iconMoon) {
        syncToggleUI();
        toggle.addEventListener('click', () => {
            const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            syncToggleUI();
        });
    }

    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        revealEls.forEach(el => io.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('is-visible'));
    }

    const GITHUB_USERNAME = 'octocat';

    async function loadRepos() {
        const statusEl = document.getElementById('repoStatus');
        const grid = document.getElementById('repoGrid');

        if (!statusEl || !grid) return;

        try {
            const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
            if (!res.ok) throw new Error('GitHub API request failed: ' + res.status);
            const repos = await res.json();

            if (!Array.isArray(repos) || repos.length === 0) {
                statusEl.textContent = 'No public repositories found for this username yet.';
                return;
            }

            statusEl.remove();
            grid.innerHTML = repos.map(repo => `
                <div class="col-sm-6 col-lg-4">
                  <div class="repo-card h-100">
                    <h3><a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a></h3>
                    <p>${repo.description ? repo.description : 'No description provided.'}</p>
                    <div class="repo-meta">
                      <span>${repo.language ? repo.language : '—'}</span>
                      <span>★ ${repo.stargazers_count}</span>
                    </div>
                  </div>
                </div>
            `).join('');
        } catch (err) {
            statusEl.textContent = 'Could not load repositories right now — check the username in the script or try again later.';
            console.error(err);
        }
    }

    loadRepos();
});
