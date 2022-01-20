# VTCD

> Visual Test Critical Deploy

Este script crea screenshots de páginas críticas para el funcionamiento del sitio público de AFP Modelo; así automatizamos que éstas sigan funcionando correctamente tras el deploy y podremos actuar rápidamente si alguna queda mal configurada.

![](https://robohash.org/visual-test-critical-deploy)

## Uso:

```bash
$ npm i
$ node .
```

## Configuración:

En `config/pages.json` se manejan las páginas que van a ser analizadas. Si se modifica, seguir el siguiente formato:

```json
{
    "name": "Centro Contacto",
    "url": "/centro-contacto"
}
```

## Output:

En `./screenshots/` se generan los screenshots de acuerdo a las resoluciones _mobile_ y _desktop_ con el consiguiente formato de: `url/año/mes/dia/hora/pagina-resolucion`.


