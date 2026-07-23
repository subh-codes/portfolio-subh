# Publish `subhnetarsingh.com` with GitHub Pages

This portfolio is a static site, so no build command or paid hosting is needed.

## 1. Create the GitHub repository

1. Sign in to GitHub as **subh-codes**.
2. Create a new **public** repository named:

   `subh-codes.github.io`

3. Do not add a README, `.gitignore`, or licence when GitHub asks.

## 2. Upload the portfolio

### Simple browser method

1. Extract `subhnetar-portfolio.zip`.
2. Open the new repository on GitHub.
3. Select **Add file → Upload files**.
4. Upload the **contents inside** the extracted folder—not the outer folder itself.
5. Confirm that `index.html` and `CNAME` appear at the repository root.
6. Commit the files to `main`.

### Git command method

Run these commands from inside the extracted portfolio folder:

```bash
git init
git add .
git commit -m "Launch portfolio"
git branch -M main
git remote add origin https://github.com/subh-codes/subh-codes.github.io.git
git push -u origin main
```

## 3. Enable GitHub Pages

1. Open the repository's **Settings**.
2. Select **Pages** under **Code and automation**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`.
5. Select **Save**.

Your temporary address will be:

`https://subh-codes.github.io`

## 4. Add the custom domain

In **Settings → Pages → Custom domain**, enter:

`subhnetarsingh.com`

The included `CNAME` file already contains this domain.

## 5. Configure DNS

At the company where you purchased the domain, remove conflicting `A`, `AAAA`,
or forwarding records for the root domain, then add:

| Type | Host/name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `subh-codes.github.io` |

Use the provider's default TTL. Some providers use a blank host instead of `@`.

## 6. Turn on HTTPS

DNS changes can take up to 24 hours. Return to **Settings → Pages** after the
domain is recognized, then select **Enforce HTTPS**.

Test both:

- `https://subhnetarsingh.com`
- `https://www.subhnetarsingh.com`

## Updating the website later

Edit the files, then run:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will publish the new version automatically.

## Important files

- `index.html` — content and links
- `styles.css` — layout, colours, and responsive design
- `script.js` — animation, menu, project previews, and contact action
- `assets/subh-avatar.png` — generated avatar
- `CNAME` — custom domain
- `.nojekyll` — tells GitHub Pages to publish the static files directly
