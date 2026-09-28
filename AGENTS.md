<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Editable site content lives in the `site_content` table (keys: `contact`, `cta`, `hero:<path>`, `plans:<path>`) and overrides code defaults via hooks in src/lib/content.ts — keeps the site working with no saved edits.
- Admin images go to the private `site-images` bucket and are served through /api/public/img/* — public buckets are blocked in this workspace.
