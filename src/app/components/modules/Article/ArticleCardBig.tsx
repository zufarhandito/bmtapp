import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from '@material-tailwind/react';

export function ArticleCardBig() {
  return (
    <Card className="max-w-[24rem] overflow-hidden rounded-none shadow-none h-[500px]">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <a href="/articles">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="ui/ux review check"
          />
        </a>
      </CardHeader>
      <CardBody className="px-0">
        <Typography className="ml-auto mb-1" variant="small">
          January 10
        </Typography>
        <a href="/articles">
          <Typography variant="h5" color="blue-gray">
            UI/UX Review Check
          </Typography>
        </a>
        <a href="/articles/1">
          <Typography
            variant="paragraph"
            color="gray"
            className="mt-3 font-normal"
          >
            Because it&apos;s about motivating the doers. Because I&apos;m here
            to follow my dreams and inspire others.
          </Typography>
        </a>
      </CardBody>
    </Card>
  );
}
