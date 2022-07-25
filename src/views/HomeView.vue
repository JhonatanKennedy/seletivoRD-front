<template>
  <div class="home">
    <!-- nav container -->
    <section class="nav-container">
      <NavBar />
    </section>
    <!-- card containers -->
    <section class="first-card">
      <div class="first-text">
        <h1>Gere mais <span>oportunidades</span> para seu negócio</h1>
        <p>
          O RD Station Marketing é um software para sua empresa fazer campanhas
          melhores, nutrir Leads, gerar oportunidades comerciais qualificadas e
          alcançar mais resultados.
        </p>
      </div>
      <!-- form -->
      <div class="form">
        <div class="form-header">
          <h3>Comece seus 10 dias de teste grátis do RD Station Marketing!</h3>
          <p>Não precisa cadastrar cartão de crédito. 😉</p>
        </div>
        <form
          class="form-inputs"
          @submit="formSubmit($event)"
          v-if="!formPassed"
        >
          <b>Diga, qual seu nome?</b>
          <Input
            :value.sync="form.name"
            type="text"
            placeholder="Insira seu nome"
          />
          <b>Seu email de trabalho</b>
          <Input
            :value.sync="form.email"
            type="email"
            placeholder="Insira seu e-mail"
          />
          <b>Seu telefone</b>
          <Input
            :value.sync="form.phone"
            type="tel"
            placeholder="Insira seu número de telefone com DDD"
          />
          <b>Seu cargo de ocupação</b>
          <Input
            @select:input="form.position = $event"
            type="select"
            placeholder="Selecione seu cargo"
            selectName="position"
            :selectOptions="positions"
          />
          <b>Crie uma senha</b>
          <Input
            :value.sync="password"
            type="password"
            placeholder="Sua senha"
            :error="errorPassword"
          />
          <b>Confirme sua senha</b>
          <Input
            :value.sync="confirmPassword"
            type="password"
            placeholder="Confirme sua senha"
            :error="errorPassword"
          />
          <b>Qual o site da sua empresa?</b>
          <Input
            @radio:input="form.haveSite = $event"
            :radioValue="true"
            :value="form.haveSite"
            type="radio"
            textRadio="Meu site é"
            nameRadio="have-site"
          />
          <br />
          <Input
            :value.sync="form.url"
            type="url"
            placeholder="Insira o endereço do seu site"
            :disable="!form.haveSite"
          />
          <br />
          <Input
            @radio:input="form.haveSite = $event"
            :radioValue="false"
            :value="form.haveSite"
            type="radio"
            textRadio="Ainda não tenho site"
            nameRadio="have-site"
          />
          <br />
          <div class="form-disclaimer">
            <ul>
              <li>
                Ao criar minha conta estou de acordo com os
                <a
                  href="https://legal.rdstation.com/pt-BR/rdstation-services-agreement/"
                  >termos de uso</a
                >
                do software e
                <a href="https://legal.rdstation.com/pt/privacy-policy/"
                  >política de privacidade</a
                >
              </li>
              <li>
                Ao preencher o formulário, concordo em receber comunicações de
                acordo com meus interesses.
              </li>
              <li>
                *Você pode alterar suas permissões de comunicação a qualquer
                tempo.
              </li>
            </ul>
          </div>
          <Button
            type="submit"
            text="CRIAR MINHA CONTA"
            class="button-submit"
          />
        </form>
        <div v-else>Obrigado!, entraremos em contato</div>
      </div>
      <div class="second-text">
        <div class="second-text-container">
          <h3>Estaremos juntos desde o primeiro passo!</h3>
          <div class="second-text-container-legend">
            Se você ainda não sabe como extrair o máximo das ações digitais, não
            tem problema. O <strong>RD Station Marketing</strong> é mais que uma
            ferramenta, nos importamos com os seus resultados.
            <br />
            <br />
            <strong> Estaremos com você do planejamento até a prática!</strong>
          </div>
        </div>
      </div>
    </section>
    <!-- second card -->
    <section class="second-card">
      <div class="second-card-picture">
        <img src="@/assets/background/example.png" />
      </div>
      <div class="second-card-text">
        <h3>Resultados previsíveis e mais clientes para sua empresa</h3>
        <p>Torne sua atuação no Marketing Digital mais eficaz</p>
        <ul>
          <li>
            <img src="@/assets/icons/blueCheck.png" />
            <span>
              <strong>Ferramentas intuitivas</strong> e com modelos prontos,
              vídeos explicativos e passo a passo guiado</span
            >
          </li>
          <li>
            <img src="@/assets/icons/blueCheck.png" />
            <span>
              <strong>Implementação com especialistas</strong> focada em
              planejamento e prática (nos planos Marketing Pro e Enterprise)
            </span>
          </li>
          <li>
            <img src="@/assets/icons/blueCheck.png" />
            <span>
              <strong>Time de especialistas em Sucesso do Cliente</strong> para
              apoiar na otimização da estratégia em cada fase da sua jornada
              (nos planos Marketing Pro e Enterprise)
              <strong>Time de especialistas em Sucesso do Cliente</strong> para
              apoiar na otimização da estratégia em cada fase da sua jornada
              (nos planos Marketing Pro e Enterprise)
            </span>
          </li>
          <li>
            <img src="@/assets/icons/blueCheck.png" />
            <span>
              <strong>Suporte técnico</strong> em português, espanhol e inglês
              para tirar dúvidas, com 97% de satisfação entre nossos clientes
            </span>
          </li>
          <li>
            <img src="@/assets/icons/blueCheck.png" />
            <span>
              <strong>Muito conteúdo educativo</strong>,eventos, cursos da
              <a href="https://rduniversity.com.br/">RD University</a> e
              comunidades para você continuar evoluindo
            </span>
          </li>
        </ul>
      </div>
    </section>
    <!-- third card -->
    <div class="third-card-title">
      A ferramenta de Automação de Marketing líder na América Latina
    </div>
    <section class="third-card">
      <div class="third-card-container">
        <div
          class="third-card-container-items"
          v-for="(item, key) in cards"
          :key="key"
        >
          <Card :iconType="item.icon" :title="item.title" :text="item.text" />
        </div>
      </div>
    </section>
    <div class="third-card-container-mobile">
      <Carousel
        :perPageCustom="[
          [0, 1],
          [768, 1],
        ]"
      >
        <Slide v-for="(item, key) in cards" :key="key"
          ><Card :iconType="item.icon" :title="item.title" :text="item.text" />
        </Slide>
      </Carousel>
    </div>
    <!-- fourth card -->
    <section class="fourth-card">
      <h1>Por que mais de 25.000 empresas escolheram o RD Station?</h1>
      <span
        >Combinamos nossos produtos de Marketing e Vendas com pessoas que se
        importam com seus resultados e um ecossistema que apoia o seu negócio do
        planejamento à prática.</span
      >
      <div class="fourth-card-button">
        <Button
          type="submit"
          text="CRIAR CONTA GRATUITA"
          class="button-submit"
          @click="redirect()"
        />
      </div>
    </section>
    <!-- fith card -->
    <section class="fifth-card">
      <div class="fifth-card-text">
        <h1>Entenda melhor como o RD Station Marketing funciona na prática</h1>
        <div class="fifth-card-text-button">
          <Button
            type="submit"
            text="ASSISTA A DEMONSTRAÇÃO"
            class="button-video"
            @click="openModal()"
          />
        </div>
      </div>
      <div class="fifth-card-img">
        <img src="@/assets/icons/playButton.png" @click="openModal()" />
      </div>
    </section>
    <!-- sixth card -->
    <section class="sixth-card">
      <div class="sixth-card-text">
        <h1>Torne sua operação de Marketing ainda mais poderosa</h1>
        <span
          >O RD Station Marketing se conecta as principais ferramentas nacionais
          e internacionais
        </span>
        <div class="fourth-card-button">
          <Button
            type="submit"
            text="CRIAR CONTA GRATUITA"
            class="create-button"
            @click="redirect()"
          />
        </div>
      </div>
      <div class="sixth-card-icons">
        <div class="sixth-card-icons-unity">
          <img src="@/assets/logos/rd.svg" />
          <span>RD Station CRM</span>
        </div>
        <div class="sixth-card-icons-unity">
          <img src="@/assets/logos/salesforce.svg" />
          <span>Salesforce</span>
        </div>
        <div class="sixth-card-icons-unity">
          <img src="@/assets/logos/google.svg" />
          <span>Google</span>
        </div>
        <div class="sixth-card-icons-unity">
          <img src="@/assets/logos/facebook.svg" />
          <span>Facebook</span>
        </div>
        <div class="sixth-card-icons-unity">
          <img src="@/assets/logos/linkedin.svg" />
          <span>LinkedIn</span>
        </div>
        <div class="sixth-card-icons-unity">
          <img src="@/assets/logos/wordpress.svg" />
          <span>Wordpress</span>
        </div>
        <div class="sixth-card-icons-unity">
          <img src="@/assets/logos/hotmart.svg" />
          <span>Hotmart</span>
        </div>
        <div class="sixth-card-icons-unity">
          <img src="@/assets/logos/pagseguro.svg" />
          <span>PagSeguro</span>
        </div>
        <div class="sixth-card-icons-unity">
          <img src="@/assets/logos/shopify.svg" />
          <span>Shopify</span>
        </div>
        <div class="sixth-card-icons-unity">
          <img src="@/assets/logos/zapier.svg" />
          <span>Zapier</span>
        </div>
      </div>
    </section>
    <!-- footer -->
    <section class="footer">
      <Footer />
    </section>
    <Modal :isOpen="modal" @handleClose="modal = false" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import Input from "@/components/Input/Input.vue";
import Button from "@/components/Button/Button.vue";
import Card from "@/components/Card/Card.vue";
import { Carousel, Slide } from "vue-carousel";
import Modal from "@/components/Modal/Modal.vue";
import Footer from "@/components/Footer/Footer.vue";
import Api from "@/services/index";

export default {
  name: "HomeView",
  components: { NavBar, Input, Button, Card, Carousel, Slide, Modal, Footer },
  data() {
    return {
      password: "",
      confirmPassword: "",
      errorPassword: false,
      formPassed: false,
      form: {
        name: "",
        email: "",
        phone: "",
        position: "",
        password: "",
        url: "",
        haveSite: true,
      },
      positions: [
        "Sócio(a) / CEO / Proprietário(a)",
        "Diretor(a) de Vendas",
        "Diretor(a) de Marketing",
        "Diretor(a) Outras Áreas",
        "Gerente de Marketing",
        "Gerente de Vendas",
        "Coordenador(a)/Supervisor(a) de Marketing",
        "Coordenador(a)/Supervisor(a) de Vendas",
        "Analista/Assistente de Marketing",
        "Analista/Assistente de Vendas",
        "Vendedor(a) / Executivo(a) de Contas",
        "Estudante",
        "Outros Cargos",
      ],
      cards: [
        {
          icon: "graph",
          title: "Torne sua operação de Marketing Digital mais produtiva",
          text: "Chega de usar várias ferramentas separadas e perder as informações no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos os principais recursos de Marketing Digital em um só lugar para sua operação ser mais eficaz.",
        },
        {
          icon: "speaker",
          title: "Crie facilmente campanhas que funcionam",
          text: "É fácil usar o RD Station Marketing, porque suas funcionalidades são simples, mas poderosas, e contam com dezenas de modelos — como de Landing Pages, Pop-ups, emails — para diversas ocasiões e segmentos que você pode personalizar de acordo com a sua campanha.",
        },
        {
          icon: "network",
          title: "Construa jornadas personalizadas e gere vendas em escala",
          text: "Envie a mensagem certa na hora certa e construa jornadas personalizadas que geram até 5x mais conversões e guiam Leads até a compra. Automatize também suas tarefas e aumente a produtividade de Marketing e Vendas.",
        },
        {
          icon: "star",
          title: "Encontre automaticamente as melhores oportunidades",
          text: "Conheça melhor seu público, de acordo com as informações capturadas nas suas páginas e formulários. Defina critérios para identificar automaticamente Leads com maior potencial de compra e envie para o comercial oportunidades qualificadas.",
        },
        {
          icon: "pizzaGraph",
          title: "Saia da incerteza e comprove resultados",
          text: "Ao invés de fazer uma série de ações isoladas, sem saber qual funciona, junte as informações de todos os seus contatos e suas ações em diferentes canais com recursos de análise para provar que Marketing Digital traz mais vendas e clientes.",
        },
        {
          icon: "globe",
          title: "Suporte ágil e na sua língua",
          text: "Nosso time de suporte técnico está disponível quando você precisar, com uma taxa de satisfação de 97% entre nossos clientes e um tempo médio de resolução de 6 horas. E o melhor: tudo isso em português.",
        },
      ],
      modal: false,
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      this.isEmpty();
      this.formPassed = true;
      Api.post("/signup", this.form);
    },
    isEmpty() {
      if (!this.form.name) {
        return alert("Favor preencher o nome");
      }
      if (!this.form.email) {
        return alert("Favor preencher o email");
      }
      if (!this.form.phone) {
        return alert("Favor preencher o telefone");
      }
      if (!this.form.position) {
        return alert("Favor selecionar uma posição");
      }
      if (!this.password || !this.confirmPassword) {
        return alert("Favor preencher a senha e a confirmação");
      }
      if (this.errorPassword) {
        alert("senhas precisam ser iguais");
      } else {
        this.form.password = this.password;
      }
      if (this.form.haveSite) {
        if (!this.form.url) {
          return alert("Favor preencher um URL");
        }
      }
    },
    redirect() {
      window.open("https://app.rdstation.com.br/signup");
    },
    openModal() {
      this.modal = !this.modal;
    },
  },
  watch: {
    password(newValue) {
      if (newValue !== "" && this.confirmPassword !== "") {
        const isMatch = newValue === this.confirmPassword;
        this.errorPassword = !isMatch;
      }
    },
    confirmPassword(newValue) {
      if (newValue !== "" && this.password !== "") {
        const isMatch = newValue === this.password;
        this.errorPassword = !isMatch;
      }
    },
  },
};
</script>
<style lang="scss" src="./style.scss" scoped />
