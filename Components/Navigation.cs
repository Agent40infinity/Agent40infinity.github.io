﻿using Microsoft.JSInterop;
using Microsoft.AspNetCore.Components;

namespace aiden.fyi.Components
{
    public static class Navigation
    {
        public const int duration = 1000;

        public static async Task NavigateTo(NavigationManager navManager, IJSRuntime js, string page)
        {
            await js.InvokeVoidAsync("Unloaded", duration);
            await Task.Delay(duration);

            navManager.NavigateTo(page);
        }
    }
}