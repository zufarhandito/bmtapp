import ModalTemplates from '@/app/components/Templates/Modal/ModalTemplates';
import useDialog from '@/hooks/useDialog';
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
  const { isOpen, handleDialog } = useDialog();
  return (
    <section className="mb-36 items-center max-w-4xl mx-auto px-8 lg:px-0">
      {isOpen && (
        <ModalTemplates
          open={isOpen}
          handleModal={handleDialog}
          data={{
            title: 'Consequat adipisicing nostrud esse deserunt enim',
            image_url: 'https://picsum.photos/700/300',
            inserted_at: '20 September 2023',
            inserted_by: 'Zufarhandito',
            body: 'Cupidatat anim do deserunt id cillum commodo duis laborum. Sint quis ad non pariatur nulla consequat amet ad amet. Laborum enim et eu labore nostrud ad sit. Nisi occaecat ut anim sit labore eu ex ut pariatur Lorem non elit culpa. Proident enim qui deserunt eu do incididunt nisi ad cillum adipisicing. Irure anim commodo culpa ut elit laborum exercitation laboris sunt adipisicing quis velit. Excepteur sit consequat dolore in laboris.Ut nostrud proident reprehenderit ad minim Lorem excepteur minim sunt cillum et dolor dolor. Cupidatat reprehenderit Lorem cupidatat sint Lorem duis velit sunt tempor. Ex quis eu nisi ad eiusmod aliqua esse nisi. Pariatur aliquip ipsum laborum occaecat irure enim Lorem cupidatat consequat sint magna in excepteur. Eu tempor minim magna occaecat incididunt sunt cupidatat deserunt.Eiusmod laboris esse sunt id labore laboris. In occaecat sit ad cupidatat commodo non aliqua occaecat occaecat nulla fugiat elit in. Ex enim laboris veniam ullamco aliquip ad laboris dolor sunt minim. Mollit proident et velit id irure reprehenderit eiusmod sint. Duis qui proident quis dolor qui eiusmod nisi commodo anim ea fugiat nulla deserunt tempor.Incididunt irure irure deserunt pariatur velit. Eiusmod ipsum et in ea qui enim sunt nostrud ipsum commodo eu reprehenderit tempor nulla. Dolor nostrud veniam cillum anim nulla tempor sit adipisicing. Et elit non ullamco nostrud proident ullamco dolore ad magna voluptate cillum.Laborum cupidatat fugiat est nostrud irure consequat enim exercitation elit ea ea quis excepteur quis. Ullamco Lorem exercitation Lorem ullamco ipsum cillum. Laboris officia irure anim incididunt ad commodo adipisicing esse amet nulla.',
          }}
          size="md"
        />
      )}
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
                <button onClick={() => handleDialog()}>
                  <Typography variant="h5" className="mb-2 text-blue-900">
                    {item.title}
                  </Typography>
                </button>
                <Typography>{item.desc}</Typography>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </article>
    </section>
  );
}
