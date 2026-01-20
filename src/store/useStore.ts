import { create } from 'zustand'

export enum Section {
    Intro = 'intro',
    Experience = 'experience',
    Skills = 'skills',
    Projects = 'projects',
    Terminal = 'terminal'
}

interface State {
    currentSection: Section
    isLoaded: boolean
    setSection: (section: Section) => void
    setIsLoaded: (loaded: boolean) => void
}

export const useStore = create<State>((set) => ({
    currentSection: Section.Intro,
    isLoaded: false,
    setSection: (section) => set({ currentSection: section }),
    setIsLoaded: (loaded) => set({ isLoaded: loaded })
}))
