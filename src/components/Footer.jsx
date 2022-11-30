export default function Footer() {
  return (
    <footer className='page-footer green lighten-3'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <a
            className='grey-text text-lighten-4 right'
            href='https://github.com/The-barer/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Repository Link
          </a>
        </div>
      </div>
    </footer>
  );
}
