using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace aiden.fyi.Components
{
    public static class Audio
    {
        public static bool Muted = true;
        public static float Volume = 0;

        private static float lastVolume = 0.4f;

        public static void Toggle()
        {
            Muted = !Muted;

            if (Muted)
            {
                lastVolume = Volume;
                Volume = 0;
            }
            else
            {
                Volume = lastVolume;
                lastVolume = 0;
            }
        }

        public static async Task SetVolume(IJSRuntime js)
        {
            await js.InvokeVoidAsync("SetVolume", Volume, Muted);
        }
    }
}