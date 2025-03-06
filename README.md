# Portfolio Repository

> [!NOTE]
> Aiden.fyi was originally created using raw HTML, CSS, and JS. After learning Blazor, it was transitioned to WebAssembly. Some code may still be legacy.

### Auto Publish & Deploy
Utilising a Gitflow workflow and Github Actions, this portfolio is able to Auto Publish and Deploy straight to Github Pages. Steps towards auto publishing:
- Any changes to code belongs in a newly created branch or within the "Development" branch.
- After making and pushing changes, a pull request will be created from Development to Main.
- Upon pushing and merge, Github Actions will hook onto the source code and use Ubuntu to publish Blazor into WebAssembly.
- Thanks to [JamesIves "github-pages-deploy-action"](https://github.com/JamesIves/github-pages-deploy-action), Github actions will then can take the published WebAssembly from our "Release" branch and deploy it straight to Github Pages.
