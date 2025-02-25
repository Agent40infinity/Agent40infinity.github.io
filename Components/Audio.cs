using aiden.fyi.Shared.Main;

namespace aiden.fyi.Components
{
    public static class Audio
    {
        public static bool Muted = true;
        public static float Volume = 0;

        public static void Toggle() => Muted = !Muted;
    }
}
