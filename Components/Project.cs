namespace aiden.fyi.Components
{
    public class Project
    {
        public string title { get; set; } = "";
        public string category { get; set; } = "";
        public float startDate { get; set; } = 0;
        public bool displayTitle { get; set; } = true;
        public string description { get; set; } = "";
        public string image { get; set; } = "";
        public string[] key { get; set; }
        public string[] utility { get; set; }
        public ProjectSpecs? specs { get; set; }
    }
}