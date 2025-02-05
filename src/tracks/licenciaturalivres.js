import { BoxTypes, ClasseTypes } from '../definitions/constants';

export default {
  description:
    'Devem ser cursados 20 créditos-aula de disciplinas de qualquer unidade da USP e podem ser cursadas a qualquer momento da graduação, mesmo antes de abrir o núcleo avançado. As disciplinas exibidas aqui são apenas as que possuem reserva de vagas pro IB. OBS: Uma optativa eletiva/livre considerada no Bacharelado não poderá ser considerada na Licenciatura, e vice-versa. INFORMAÇÃO A CONFIRMAR: o oferecimento das disciplinas livres é em períodos alternados. Então se uma disciplina foi oferecida em 2023 no 1 semestre de manhã ou tarde, provavelmente ela será oferecida de noite no 1 semestre de 2024.',
  boxes: {
    center: [],
    left: [
      {
        title: 'Oferecidas pela FE',
        classes: [
          'EDA0690',
          'EDF0285',
          'EDF0287',
          'EDF0289',
        ],
        type: BoxTypes.FREE,
        addable: true,
        addingId: 'others',
      },
    ],
    right: [
      {
        title: 'Oferecidas pelo IB',
        classes: [
          '0410111',
          '0410404',
          '0410405',
          'BIB0317',
          'BIB0451',
          'BIB0443',
          'BIB0450',
          'BIE0319',
          'BIE0403',
          'BIF0443',
          'BIF0444',
          'BIO0410',
          'BIO0441',
          'BIO0455',
          'BIZ0307',
          'BIZ0439',
          'BIZ0445',
        ],
        type: BoxTypes.FREE,
        addable: true,
        addingId: 'others',
      },
    ],
  },
};
