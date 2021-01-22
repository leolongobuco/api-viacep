import { response } from "express";
import cepService from "../services/cepService";

class CepController {
  show = (req, res) => {
    const { cep } = req.params;

    const url = `${cep}/json/`;

    cepService.get(url).then((response) => {
      res.json(response.data);
    });
  };

  query = (req, res) => {
    const { uf, cidade, rua } = req.query;

    const url = `${uf}/${cidade}/${rua}/json`;

    cepService.get(url).then((response) => {
      res.json(response.data);
    });
  };
}

export default new CepController();
