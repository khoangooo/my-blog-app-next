function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm">
          <div>Jane Doe</div><div> • </div><div>© {currentYear}</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;