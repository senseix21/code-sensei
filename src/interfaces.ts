export interface Project {
    id: number;
    title: string;
    description: string;
    features: string[];
    technologies: string;
    completionDate: string;
    image: string[];
    liveSite: string;      // Added field for the live site link
    githubRepo: string;    // Added field for the GitHub repository link
}


