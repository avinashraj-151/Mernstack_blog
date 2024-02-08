import { Footer } from "flowbite-react"
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function footer() {
    const icons = [BsFacebook, BsDribbble, BsGithub, BsInstagram, BsTwitter];
    return (
        // <div>Footer</div>
        <Footer container className="border border-t-8 border-teal-900">
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className="mb-5">
                        <div className="">
                            <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-bold dark:text-white'>
                                <span className='px-2 py-1 bg-gradient-to-t from-indigo-700 via-purple-400 to-pink-800 rounded-xl  text-white'>Codiwizz Blog</span>
                                {/* Blog */}
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-8 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Project</Footer.Link>
                                <Footer.Link href="#">Blog</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Github</Footer.Link>
                                <Footer.Link href="#">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="codiowhizzblog™" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        {
                            icons.map(function (name, id) {
                                return (
                                    <Footer.Icon href="#" key={id} icon={name} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default footer