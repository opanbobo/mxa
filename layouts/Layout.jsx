import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
	return(
		<>
      <div id="wrapper">
        <Header/>
          <main className="main">
            <div className="content-wrapper w-full min-h-[500px] pt-16 md:pt-20">
              {props.children}
            </div>
          </main>
        <Footer/>
      </div>
		</>
	)
}

export default Layout;