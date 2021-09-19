import Container from './container'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 body-font">
      <Container>
        <div className="py-10 flex flex-row items-center">
          <div className="container px-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="/">
                <span className="ml-3 text-xl ">Inż. Kawka</span>
              </a>
              <p className="mt-2 text-sm">Blog dumnie napędzany kawą i kodem.</p>
              <h2 className="title-font font-bold  tracking-widest text-md mb-3 my-5">Kontakt</h2>
              <p>E: kotankt@zaprogramowani.dev</p>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold  tracking-widest text-md mb-3">Linki</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className=" hover:text-red-300" href="/pages/polityka-prywatnosci">Polityka prywatności</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold  tracking-widest text-md mb-3">Newsletter</h2>
                <form action="https://app.getresponse.com/add_subscriber.html" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first_name">
                      Imię:
                    </label>
                    <input type="text" name="first_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/><br/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      E-mail:
                    </label>
                    <input type="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/><br/>
                  </div>
                  <input type="hidden" name="campaign_token" value="z6s70" />
                  <input type="hidden" name="start_day" value="0" />
                  <div>
                    <input type="submit" value="Zapisz się" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                  </div>
                  <div>
                    <input id="webform_consent#hcDh_0" type="checkbox" name="webform[consent#hcDh-ver#z3nR]" value="true" className="mb-4 shadow rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <label htmlFor="webform_consent#hcDh_0" className="mx-4 py-2">Akceptuję <a
                        href="/pages/polityka-prywatnosci" target="_blank"
                        rel="nofollow noopener">Politykę prywatności</a></label> <br/>
                  </div>
                </form>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold tracking-widest text-md mb-3">Social Media</h2>
                <SocialIcon url={"https://github.com/kglusinski"} className="mx-4" />
                <SocialIcon url={"https://linkedin.com/in/kamil-głusiński"} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
