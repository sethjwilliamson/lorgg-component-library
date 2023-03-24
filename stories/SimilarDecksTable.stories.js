import SimilarDecksTable from '@/lib-components/SimilarDecksTable';
import { getRandomInt } from '@/helpers/functions';

export default {
  title: 'Library/SimilarDecksTable',
  component: SimilarDecksTable,
  argTypes: {},
};

const Template = (args) => ({
  components: { SimilarDecksTable },
  setup() {
    return { args };
  },
  template: `<div > 
              <SimilarDecksTable v-bind="args" style="height: 90vh" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  originalDeckcode:
    'CUEACAICFYAQGAQFAECAIBYBAUFCQAIGAIQACBQECYAQMDAGAMBAEAIDBECACAIBDUAQCARRAEBQECIBAYDSUAQBAECBYAIEAEFA',
  deckRows: [
    {
      deckcode:
        'CUEACAICFYAQGAQFAECAIBYBAUFCQAIGAIQACBQECYAQMDAGAMBAEAIDBECACAIBDUAQCARRAEBQECIBAYDSUAQBAECBYAIEAEFA',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckcode:
        'CUEACAICFYAQGAQFAECAIBYBAUFCQAIGAIQACBQECYAQMDAGAMBAEAIDBECACAIBDUAQCARRAEAQIHABAMBASAQBAQAQUAIGA4VA',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckcode:
        'CUDQCAYCAUAQIBAHAECQUKABAYBCAAIGAQLACBQMAYBQEAQBAMEQGAIBAEOQCBQHFIBQCAQEFYYQGAIBAQOACBABBIAQMBBL',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckcode:
        'CUDQCAYCAUAQIBAHAECQUKABAYBCAAIGAQLACBQMAYBQEAQBAMEQGAIBAEOQCBQHFIBACAROGECQCAICAQAQCBA4AEBQECIBAQAQUAIGAQVQ',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckcode:
        'CUCACAYCAUAQIBAHAEDAYBQDAIBACAYFBAAQCAI5AEBAECIBAMBBIAIEAEFACBIKFAAQMBQ6AIAQEDBRAIDAEDRAAIAQCAROAEDAIFQ',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckcode:
        'CUCACAYCAUAQIBAHAEDAYBQDAIBACAYFBAAQCAI5AEBAECIBAMBBIAIEAEFACBIKFAAQMBQ6AIAQEDBRAIDAEDRAAIAQCAROAEDAIFQ',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckcode:
        'CUDQCAIEDQAQGAQFAECAIBYBAYBCAAIGAQLACBQMAYBQEAQBAMEQGAIBAEOQCBABBIBACAROGECACAICAQAQKCRIAEDAOKQCAYBAKDQ',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckcode:
        'CUEACAIBDUAQIBAHAECQUKABAYBCAAIGAQLACBQMAYBAGAQFBEBQEAQBAMEQGAIBAIYQCBAHNIAQMAQOAEAQEAQK',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckcode:
        'CUEACAICFYAQGAQFAECAIBYBAUFCQAIGAIQACBQECYAQMDAGAMBAEAIDBECACAIBDUAQCARRAECAOUYBAYDSUAQBAEBAIAIFAIBA',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckcode:
        'CUDQCAYCAUAQIBAHAECQUKABAYBCAAIGAQLACBQMAYBQEAQBAMEQIAIBAEOQCAYCBEAQMBZKAIAQELRRAMAQCBA4AECACCQBAYCCW',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckcode:
        'CUDQCAICFYAQGAQFAECAIBYBAYBCAAIGAQLACBQMAYBAEAQDBEDACAIBDUAQCARRAEBAEAIBAMBASAIFBIUACBQHFICACAIEDQAQEAQKAEBQEFABAQAQU',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckcode:
        'CUEACAICFYAQGAQFAECAIBYBAUFCQAIGAIQACBQEFYAQMDAGAMBAEAIDBECQCAIBDUAQCARRAEAQIHABAMBASAIGA4VAA',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckcode:
        'CUDQCAICFYAQGAQFAECAIBYBAYBCAAIGAQLACBQMAYBQEAQBAMEQKAIBAEOQCAICGEAQGAQJAECQUKABAYDSUAYBAEBAIAIBAQOACBABBI',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckcode:
        'CUEACAICFYAQGAQFAECAIBYBAUFCQAIGAIQACBQECYAQMDAGAMBAEAIDBEBQCAIBDUAQMBZKAIAQEBBRAIAQCBA4AECACCQ',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
  ],
};
