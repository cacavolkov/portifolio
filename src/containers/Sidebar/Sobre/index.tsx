import Titulo from '../../../components/Titulo'
import Paragrafo from '../../../components/Paragrafo'
import { GithubSecao } from './styles'
const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex impedit
      praesentium inventore aliquid nulla, rem commodi facilis nisi. Vitae,
      explicabo! Saepe, iste? Fuga, laboriosam. Est sunt modi amet itaque ullam!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=cacavolkov&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=cacavolkov&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
