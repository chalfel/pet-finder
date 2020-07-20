const Yup = require('yup');

module.exports = {
  validateReq: async (body) => {
    const schema = Yup.object().shape({
      id: Yup.number(),
      model: Yup.string().required(),
      category: Yup.string().oneOf(['cartucho', 'toner'])
        .required(),
      ppm: Yup.number().integer(),
      wifi: Yup.boolean(),
      consume: Yup.number().positive(),
    });

    const response = await schema.isValid(body);
    return response;
  }
}