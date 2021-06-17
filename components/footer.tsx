import Container from './container'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xl lg:text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Kontakt
          </h3>
          <p className="text-2xl lg:text-2xl tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            asd
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <SocialIcon url={"https://github.com/kglusinski"} />
            <SocialIcon url={"https://linkedin.com/in/kamil-głusiński"} />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
