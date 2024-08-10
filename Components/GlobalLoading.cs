using Microsoft.JSInterop;

namespace aiden.fyi.Components
{
    public static class GlobalLoading
    {
        public static bool rendered = false;

        public static async Task FadeIn(IJSRuntime js)
        {
            await js.InvokeVoidAsync("FadeIn");
        }

        public static async Task FadeOut(IJSRuntime js)
        {
            await js.InvokeVoidAsync("FadeOut");
        }
    }
}
