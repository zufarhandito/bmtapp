import { BookOpenIcon, BuildingLibraryIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export function Profile() {
  return (
    <section className="my-36 items-center max-w-4xl mx-auto">
      <Typography variant="h4">
        Tentang Kami
      </Typography>
      <Typography className="mb-7">
        Kenali BMT Amanah beserta struktur didalamnya
      </Typography>
      <article className="grid grid-cols-2 gap-4">
        <Card className="shadow-none bg-blue-50 rounded-none">
          <CardBody>
            <div className="bg-blue-400 w-10 h-10 absolute right-0 bottom-0 rounded-tl-full"></div>
            <Typography variant="h5" className="mb-2 text-blue-900">
              Profil BMT Amanah
            </Typography>
            <Typography>
              BMT Amanah merupakan koperasi yang berlokasi di Galur, Kulon Progo
            </Typography>
          </CardBody>
        </Card>
        <Card className="shadow-none bg-blue-50 rounded-none">
          <CardBody>
            <div className="bg-blue-400 w-10 h-10 absolute right-0 bottom-0 rounded-tl-full"></div>
            <Typography variant="h5" className="mb-2 text-blue-900">
              Struktur Organisasi
            </Typography>
            <Typography>
              Ketahui dirimu tentang struktur organisasi didalam BMT Amanah
            </Typography>
          </CardBody>
        </Card>
        <Card className="shadow-none bg-blue-50 rounded-none">
          <CardBody>
            <div className="bg-blue-400 w-10 h-10 absolute right-0 bottom-0 rounded-tl-full"></div>
            <Typography variant="h5" className="mb-2 text-blue-900">
              Sejarah Koperasi
            </Typography>
            <Typography>
              Baca bagaimana BMT Amanah berdiri dan berkembang hingga seperti sekarang
            </Typography>
          </CardBody>
        </Card>
        <Card className="shadow-none bg-blue-50 rounded-none">
          <CardBody>
            <div className="bg-blue-400 w-10 h-10 absolute right-0 bottom-0 rounded-tl-full"></div>
            <Typography variant="h5" className="mb-2 text-blue-900">
              Visi & Misi
            </Typography>
            <Typography>
              Baca bagaimana BMT Amanah berdiri dan berkembang hingga seperti sekarang
            </Typography>
          </CardBody>
        </Card>
      </article>
    </section>
  );
}