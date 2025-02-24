export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">ТОО "Nur Zhausyn Impex"</h3>
            <p className="text-gray-400">Ведущая экспортная компания по зерну и масличным культурам с 2014 года</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400">
              © {new Date().getFullYear()} ТОО "Nur Zhausyn Impex".
              <br />
              Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
