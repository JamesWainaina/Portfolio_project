import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '../lib/utils/utils'
import { useToast } from '../hooks/use-toast'

const Contact = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState();
    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true);
        setTimeout(() => {
            toast({
                title: "message sent!",
                description: "Thank you for your message I'll get back to you soon"
            })
        }, 1500);
        setIsSubmitting(false);
    }

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Get in
                 <span className='text-primaary'>Touch</span></h2>
                 <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                 </p>

                 <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact information</h3>
                        <div className='space-y-6 justify-center'>
                            <div className='flex items-start space-x-4 '>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className='h-6 text-primary'/> {""}
                                </div>
                                <div>
                                    <h4 className='font-medium'>Email</h4>
                                    <a href='wainainajamesgatheru@gmail.com' className='text-muted-foreground hover:text-primary transiton-colors'>
                                        wainainajamesgatheru@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className='flex items-start space-x-4 '>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Phone className='h-6 text-primary'/> {""}
                                </div>
                                <div>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a href='tel:+254748292426' 
                                    className='text-muted-foreground hover:text-primary transiton-colors'>
                                            +254 (748) 292-426 
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4 '>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <MapPin className='h-6 text-primary'/> {""}
                                </div>
                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <a href='tel:+254748292426' 
                                    className='text-muted-foreground hover:text-primary transiton-colors'>
                                            Nairobi, Kenya
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'> Connect with Me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href='https://www.linkedin.com/in/james-gatheru-2282b1212/' target='_blank'>
                                    <Linkedin/>
                                </a>
                                <a href='https://x.com/Jameswainaina99' target='_blank'>
                                    <Twitter/>
                                </a>
                                <a href='https://www.instagram.com/jamesgatheru.wainaina/' target='_blank'>
                                    <Instagram/>
                                </a>
                                <a>
                                    <Twitch/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl  font-semibold mb-6'>
                            Send a message
                        </h3>

                        <form action="" className='space-y-6' onSubmit={toast}>
                            <div>
                                <label htmlFor='name' className='block text-sm mb-2 font-medium'> 
                                    {""}
                                    Your Name</label>
                                <input type="text" id='name' name='name' required
                                className='w-full px-4 py-3 rounded-md border border-imput bg-background focus:outlind-hidden focus:ring-2 focus-ring-primary'
                                placeholder='Michael Johna'/>
                            </div>
                            <div>
                                <label htmlFor='email' className='block text-sm mb-2 font-medium'> 
                                    {""}
                                    Your Email</label>
                                <input type="email" id='email' name='email' required
                                className='w-full px-4 py-3 rounded-md border border-imput bg-background focus:outlind-hidden focus:ring-2 focus-ring-primary'
                                placeholder='michael@gmail.com'/>
                            </div>

                            <div>
                                <label htmlFor='message' className='block text-sm mb-2 font-medium'> 
                                    {""}
                                    Your Message
                                    </label>
                                <textarea id='message' name='message' required
                                className='w-full px-4 py-3 rounded-md border border-imput bg-background focus:outlind-hidden focus:ring-2 focus-ring-primary resize-none'
                                placeholder="Hello, I'd like to talk about..."/>
                            </div>

                            <button disabled={isSubmitting} type='submit'
                             className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                Send Message
                                {isSubmitting ? "Sending..." : "Send Message" }
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                 </div>
        </div>
    </section>
  )
}

export default Contact