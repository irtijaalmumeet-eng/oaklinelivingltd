# OaklineLiving website: setup guide

## What's in this folder

| File / folder | What it is |
|---|---|
| `index.html`, `site.js`, `results.webp` | The website itself |
| `content/` | The editable parts: team, job openings, hire roles, contact details |
| `admin/` | Your admin panel, at **oaklinelivingltd.com/admin** |
| `images/uploads/` | Photos you upload from the admin panel |

You never need to touch `index.html`. Edit everything from the admin panel.

---

## One-time setup (about 20 minutes)

### 1. Put the files on GitHub
1. Create a free account at **github.com**.
2. Click **New repository** and name it `oakline-site`. You can make it Private. Click **Create**.
3. Click **uploading an existing file**, drag in **everything inside this folder** (including the `admin`, `content` and `images` folders), then click **Commit changes**.

### 2. Add your GitHub username to the admin config
1. In GitHub, open `admin/config.yml` and click the pencil icon.
2. Change `YOUR-GITHUB-USERNAME` to your GitHub username, e.g. `repo: oakline123/oakline-site`
3. Click **Commit changes**.

### 3. Connect GitHub to Netlify
1. Log in at **app.netlify.com** (sign in with GitHub).
2. Go to **Add new project → Import an existing project → GitHub**, then choose `oakline-site`.
3. Leave the build settings empty and click **Deploy**.

Now, every time something changes on GitHub (including edits from your admin panel), Netlify updates the live site automatically.

### 4. Turn on the admin login
1. On GitHub, go to **Settings → Developer settings → OAuth Apps → New OAuth App**.
   - Application name: `Oakline admin`
   - Homepage URL: `https://oaklinelivingltd.com`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
2. Click **Register application**, copy the **Client ID**, then click **Generate a new client secret** and copy that too.
3. In Netlify, open your project and go to **Project configuration → Security (Access & security) → OAuth → Install provider**.
4. Choose **GitHub**, paste the Client ID and Client Secret, and save.

### 5. Connect your domain (your Google email keeps working)
In Netlify: **Domain management → Add a domain → oaklinelivingltd.com**. Then, where you bought the domain, add:
- **A record**: host `@` → `75.2.60.5`
- **CNAME record**: host `www` → `your-project-name.netlify.app`

Delete only the old website A/CNAME records. **Do not touch any MX or TXT records**, because those run your Google email.
Don't switch your nameservers to Netlify.

### 6. Get form submissions by email
In Netlify: **Forms → enable form detection**, then redeploy once (**Deploys → Trigger deploy**).
Then go to **Project configuration → Notifications → Form submission notifications → Add notification → Email** and enter `irtijaalmumeet@oaklinelivingltd.com`.
You'll get emails for: *start-store*, *hire-request* and *job-application* (including CV uploads).

---

## Editing your site (every day)

1. Go to **oaklinelivingltd.com/admin** and click **Login with GitHub**.
2. Choose what to edit:
   - **Team members**: add, remove or reorder people, and upload photos
   - **Job openings (Careers)**: roles people can apply for
   - **Hire an employee roles**: roles businesses can hire
   - **Contact details**: email, phone, WhatsApp, company number, address, social links
3. Click **Publish → Publish now**. The live site updates in about 1 minute.

Tip: square or slightly wide photos (e.g. 800×640) look best on team cards.
