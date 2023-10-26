import { Card, CardBody, Typography } from '@material-tailwind/react';
import { motion } from 'framer-motion';

type ProfileDataType = {
  title: string;
  desc: string;
};

const profileData: ProfileDataType[] = [
  {
    title: 'Profil BMT Amanah',
    desc: 'BMT Amanah merupakan koperasi yang terletak di Galur, Kulon Progo, dengan fokus pada layanan keuangan',
  },
  {
    title: 'Struktur Organisasi',
    desc: 'Informasi mengenai struktur organisasi BMT Amanah yang relevan dan terkait.',
  },
  {
    title: 'Sejarah BMT Amanah',
    desc: 'Telusuri bagaimana BMT Amanah didirikan dan berkembang hingga mencapai posisinya saat ini.',
  },
  {
    title: 'Visi dan Misi',
    desc: 'Pahami dengan jelas visi dan misi yang menjadi landasan BMT Amanah.',
  },
];

export default function Profile() {
  return (
    <section className="mb-36 items-center max-w-4xl mx-auto px-8 lg:px-0">
      <Typography variant="h4">Tentang Kami</Typography>
      <Typography className="mb-7">
        Kenali BMT Amanah beserta struktur didalamnya
      </Typography>
      <article className="grid md:grid-cols-2 gap-4">
        {profileData.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              x: 200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: index / 2,
            }}
            viewport={{
              once: true,
            }}
          >
            <Card className="shadow-none bg-blue-50 rounded-none md:h-44 lg:h-40 hover:-translate-y-2 transition-transform">
              <CardBody>
                <div className="bg-blue-400 w-10 h-10 absolute right-0 bottom-0 rounded-tl-full"></div>
                <Typography variant="h5" className="mb-2 text-blue-900">
                  {item.title}
                </Typography>
                <Typography>{item.desc}</Typography>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </article>
    </section>
  );
}
