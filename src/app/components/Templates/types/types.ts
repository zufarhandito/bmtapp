import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ModalBodyType = {
    title: string;
    image_url: string | StaticImport;
    inserted_at: string;
    inserted_by: string;
    body: string;
}