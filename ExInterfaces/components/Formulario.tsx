import { PageProps } from "$fresh/server.ts";
import { FunctionalComponent } from "preact/src/index.d.ts";
type props ={
    String telefono;
};
export const Formulario:FunctionalComponent(props:PageProps) => {
    return (
        <div>
          <form method="get">
            <input type="telefono" name="telefono" value="" />
            <button type="submit">Enviar</button>
          </form>
        </div>
      );
};
