import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Formulario } from "../components/Formulario.tsx";
type Data ={
  telefono:string;

}
/*
export const handler: Handlers<Data[]> = {
  async GET(_req:Request, ctx:FreshContext) {
try{
    const url = "https://api.api-ninjas.com/v1/country?"
    const response = await fetch(
      `https://api.api-ninjas.com/v1/validatephone?number=+12065550100`,
       Headers={'X-Api-Key'= 'hd5cu6NU54+E6VtZzcICQA==L5c4S4Zt6m2ugF4g'}
    );
    const telefono = new url.();

    return ctx.render(response);
  }
  catch(e){
    return new Response("Fallo al llamar a la API");
  }
    



    }

  },
};

export default function Page(props: PageProps<Data>) {
  return (
    <div>
      <h1>{props.data.telefono}</h1>
    </div>
  );
}
  */
export default function Page(props: PageProps<Data>) {
  return (
    <div>
      <h1>Pagina principal</h1>
    </div>
  );
}
 

