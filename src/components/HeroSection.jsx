import { ArrowDown } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
    return (
        <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
            <div className='container max-w-4xl mx-auto text-center z-10 align-items center'>
                <div className='space-y-6'>
                    <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                        <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                        <span className='text-primary opacity-0 animate-fade-in ml-3'>James</span>
                        <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'> Gatheru</span>
                    </h1>

                    <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Qui, vitae sint corporis quasi illum, explicabo cum autem porro labore
                        repellat quos. Laborum, laudantium minima perspiciatis dolorem aspernatur
                        odio perferendis architecto?
                    </p>

                    <div className='pt-4 opacity-0 animate-fade-in-delay-3'>
                        <a href="projects" className='cosmic-button cosmic-button-glow'>
                            View my Work
                        </a>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in-delay-3'>
                <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
                <ArrowDown className='h-5 w-5 text-primary'/>
            </div>
        </section>
    )
}

export default HeroSection