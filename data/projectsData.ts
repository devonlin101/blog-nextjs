interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'minesweeper game online',
    description: `Free Online Minesweeper in Old Windows System style UI. Play the classic game in Beginner, Intermediate, and Expert mode.`,
    imgSrc: '/static/images/minesweeper.png',
    href: 'https://ohminesweeper.online/',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
