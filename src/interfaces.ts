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

export interface BlogExample {
    code: string;
}

export interface BlogSection {
    title: string;
    content: string[];
    examples: BlogExample[];
}

export interface BlogEntry {
    _id: string;
    id: number;
    title: string;
    description: string;
    category: string,
    image: string;
    sections: BlogSection[];
    tags: string[];
    date: string;
}



export interface Section {
    title: string;
    content: string;
    code: string;
    note: string | undefined;
}

export interface BlogData {
    _id: string;
    title: string;
    description: string;
    image: string;
    sections: Section[];
    tags: string[];
    category: string;
}

export interface BlogProps {
    data: BlogData[];
}

