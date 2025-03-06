import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LanguageSwitcher from "../LanguageSwitcher";
import { cookies } from "next/headers";
import { getTranslation } from "@/i18n";
import { ArrowLeft } from "@mui/icons-material";

export default function PrivacyPolicy() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const translation = getTranslation(lang);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <header className="bg-gray-800 px-8 py-4">
        <h1 className="text-2xl font-bold ml-10">
					<a href="/">
						<span className="text-green-500">My</span>
						<span className="text-slate-100">Money</span>
					</a>
        </h1>
        <LanguageSwitcher />
      </header>

      <LanguageSwitcher />

      <div className="max-w-6xl text-right mt-6 mr-6">
        <p>
          <a href="/" className="hover:text-green-600">
            <ArrowLeft />
            {translation.BACK_TO_HOME}
          </a>
        </p>
      </div>

      {lang === "en" && (
        <div className="max-w-5xl mx-auto p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2 text-green-500">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-200">
              Last updated: March 03, 2025
            </p>
          </header>
          <p className="mb-4">
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>
          <p className="mb-8">
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Interpretation and Definitions
          </h2>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Interpretation
          </h3>
          <p className="mb-8">
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Definitions
          </h3>
          <p className="mb-4">For the purposes of this Privacy Policy:</p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>
              <strong>Account</strong> means a unique account created for You to
              access our Service or parts of our Service.
            </li>
            <li>
              <strong>Affiliate</strong> means an entity that controls, is
              controlled by or is under common control with a party, where
              &quot;control&quot; means ownership of 50% or more of the shares,
              equity interest or other securities entitled to vote for election
              of directors or other managing authority.
            </li>
            <li>
              <strong>Company</strong> (referred to as either &quot;the
              Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;
              in this Agreement) refers to My Money.
            </li>
            <li>
              <strong>Cookies</strong> are small files that are placed on Your
              computer, mobile device or any other device by a website,
              containing the details of Your browsing history on that website
              among its many uses.
            </li>
            <li>
              <strong>Country</strong> refers to: Brazil
            </li>
            <li>
              <strong>Device</strong> means any device that can access the
              Service such as a computer, a cellphone or a digital tablet.
            </li>
            <li>
              <strong>Personal Data</strong> is any information that relates to
              an identified or identifiable individual.
            </li>
            <li>
              <strong>Service</strong> refers to the Website.
            </li>
            <li>
              <strong>Service Provider</strong> means any natural or legal
              person who processes the data on behalf of the Company. It refers
              to third-party companies or individuals employed by the Company to
              facilitate the Service, to provide the Service on behalf of the
              Company, to perform services related to the Service or to assist
              the Company in analyzing how the Service is used.
            </li>
            <li>
              <strong>Third-party Social Media Service</strong> refers to any
              website or any social network website through which a User can log
              in or create an account to use the Service.
            </li>
            <li>
              <strong>Usage Data</strong> refers to data collected
              automatically, either generated by the use of the Service or from
              the Service infrastructure itself (for example, the duration of a
              page visit).
            </li>
            <li>
              <strong>Website</strong> refers to My Money, accessible from{" "}
              <a
                href="https://mymoney-omega.vercel.app/"
                rel="external nofollow noopener"
                target="_blank"
                className="text-green-500 hover:underline"
              >
                https://mymoney-omega.vercel.app/
              </a>
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the
              Service, or the company, or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Collecting and Using Your Personal Data
          </h2>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Types of Data Collected
          </h3>
          <h4 className="text-lg font-semibold mb-2">Personal Data</h4>
          <p className="mb-8">
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Usage Data</li>
          </ul>
          <h4 className="text-lg font-semibold mb-2">Usage Data</h4>
          <p className="mb-8">
            Usage Data is collected automatically when using the Service.
          </p>
          <p className="mb-8">
            Usage Data may include information such as Your Device&apos;s
            Internet Protocol address (e.g. IP address), browser type, browser
            version, the pages of our Service that You visit, the time and date
            of Your visit, the time spent on those pages, unique device
            identifiers and other diagnostic data.
          </p>
          <p className="mb-8">
            When You access the Service by or through a mobile device, We may
            collect certain information automatically, including, but not
            limited to, the type of mobile device You use, Your mobile device
            unique ID, the IP address of Your mobile device, Your mobile
            operating system, the type of mobile Internet browser You use,
            unique device identifiers and other diagnostic data.
          </p>
          <p className="mb-8">
            We may also collect information that Your browser sends whenever You
            visit our Service or when You access the Service by or through a
            mobile device.
          </p>
          <h4 className="text-lg font-semibold mb-2">
            Information from Third-Party Social Media Services
          </h4>
          <p className="mb-8">
            The Company allows You to create an account and log in to use the
            Service through the following Third-party Social Media Services:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Google</li>
            <li>Facebook</li>
          </ul>
          <p className="mb-8">
            If You decide to register through or otherwise grant us access to a
            Third-Party Social Media Service, We may collect Personal data that
            is already associated with Your Third-Party Social Media
            Service&apos;s account, such as Your name, email address and profile
            picture.
          </p>
          <p className="mb-8">
            You may also have the option of sharing additional information with
            the Company through Your Third-Party Social Media Service&apos;s
            account. If You choose to provide such information and Personal
            Data, during registration or otherwise, You are giving the Company
            permission to use, share, and store it in a manner consistent with
            this Privacy Policy.
          </p>
          <h4 className="text-lg font-semibold mb-2">
            Tracking Technologies and Cookies
          </h4>
          <p className="mb-8">
            We use Cookies and similar tracking technologies to track the
            activity on Our Service and store certain information. Tracking
            technologies used are beacons, tags, and scripts to collect and
            track information and to improve and analyze Our Service. The
            technologies We use may include:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>
              <strong>Cookies or Browser Cookies.</strong> A cookie is a small
              file placed on Your Device. You can instruct Your browser to
              refuse all Cookies or to indicate when a Cookie is being sent.
              However, if You do not accept Cookies, You may not be able to use
              some parts of our Service. Unless you have adjusted Your browser
              setting so that it will refuse Cookies, our Service may use
              Cookies.
            </li>
            <li>
              <strong>Web Beacons.</strong> Certain sections of our Service and
              our emails may contain small electronic files known as web beacons
              (also referred to as clear gifs, pixel tags, and single-pixel
              gifs) that permit the Company, for example, to count users who
              have visited those pages or opened an email and for other related
              website statistics (for example, recording the popularity of a
              certain section and verifying system and server integrity).
            </li>
          </ul>
          <p className="mb-8">
            Cookies can be &quot;Persistent&quot; or &quot;Session&quot;
            Cookies. Persistent Cookies remain on Your personal computer or
            mobile device when You go offline, while Session Cookies are deleted
            as soon as You close Your web browser. You can learn more about
            cookies on{" "}
            <a
              href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies"
              target="_blank"
              className="text-green-500 hover:underline"
            >
              TermsFeed website
            </a>{" "}
            article.
          </p>
          <p className="mb-8">
            We use both Session and Persistent Cookies for the purposes set out
            below:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>
              <strong>Necessary / Essential Cookies</strong>
              <p>Type: Session Cookies</p>
              <p>Administered by: Us</p>
              <p>
                Purpose: These Cookies are essential to provide You with
                services available through the Website and to enable You to use
                some of its features. They help to authenticate users and
                prevent fraudulent use of user accounts. Without these Cookies,
                the services that You have asked for cannot be provided, and We
                only use these Cookies to provide You with those services.
              </p>
            </li>
            <br />
            <li>
              <strong>Cookies Policy / Notice Acceptance Cookies</strong>
              <p>Type: Persistent Cookies</p>
              <p>Administered by: Us</p>
              <p>
                Purpose: These Cookies identify if users have accepted the use
                of cookies on the Website.
              </p>
            </li>
            <br />
            <li>
              <strong>Functionality Cookies</strong>
              <p>Type: Persistent Cookies</p>
              <p>Administered by: Us</p>
              <p>
                Purpose: These Cookies allow us to remember choices You make
                when You use the Website, such as remembering your login details
                or language preference. The purpose of these Cookies is to
                provide You with a more personal experience and to avoid You
                having to re-enter your preferences every time You use the
                Website.
              </p>
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Use of Your Personal Data
          </h3>
          <p className="mb-8">
            The Company may use Personal Data for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>
              <strong>To provide and maintain our Service</strong>, including to
              monitor the usage of our Service.
            </li>
            <li>
              <strong>To manage Your Account:</strong> to manage Your
              registration as a user of the Service. The Personal Data You
              provide can give You access to different functionalities of the
              Service that are available to You as a registered user.
            </li>
            <li>
              <strong>To contact You:</strong> To contact You by email,
              telephone calls, SMS, or other equivalent forms of electronic
              communication, such as a mobile application&apos;s push
              notifications regarding updates or informative communications
              related to the functionalities, products or contracted services,
              including the security updates, when necessary or reasonable for
              their implementation.
            </li>
            <li>
              <strong>To manage Your requests:</strong> To attend and manage
              Your requests to Us.
            </li>
          </ul>
          <p className="mb-8">
            We may share Your personal information in the following situations:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>
              <strong>With Service Providers:</strong> We may share Your
              personal information with Service Providers to monitor and analyze
              the use of our Service, to contact You.
            </li>
            <li>
              <strong>With Your consent</strong>: We may disclose Your personal
              information for any other purpose with Your consent.
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Retention of Your Personal Data
          </h3>
          <p className="mb-8">
            The Company will retain Your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use Your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies.
          </p>
          <p className="mb-8">
            The Company will also retain Usage Data for internal analysis
            purposes. Usage Data is generally retained for a shorter period of
            time, except when this data is used to strengthen the security or to
            improve the functionality of Our Service, or We are legally
            obligated to retain this data for longer time periods.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Transfer of Your Personal Data
          </h3>
          <p className="mb-8">
            Your information, including Personal Data, is processed at the
            Company&apos;s operating offices and in any other places where the
            parties involved in the processing are located. It means that this
            information may be transferred to — and maintained on — computers
            located outside of Your state, province, country or other
            governmental jurisdiction where the data protection laws may differ
            than those from Your jurisdiction.
          </p>
          <p className="mb-8">
            Your consent to this Privacy Policy followed by Your submission of
            such information represents Your agreement to that transfer.
          </p>
          <p className="mb-8">
            The Company will take all steps reasonably necessary to ensure that
            Your data is treated securely and in accordance with this Privacy
            Policy and no transfer of Your Personal Data will take place to an
            organization or a country unless there are adequate controls in
            place including the security of Your data and other personal
            information.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Delete Your Personal Data
          </h3>
          <p className="mb-8">
            You have the right to delete or request that We assist in deleting
            the Personal Data that We have collected about You.
          </p>
          <p className="mb-8">
            Our Service may give You the ability to delete certain information
            about You from within the Service.
          </p>
          <p className="mb-8">
            You may update, amend, or delete Your information at any time by
            signing in to Your Account, if you have one, and visiting the
            account settings section that allows you to manage Your personal
            information. You may also contact Us to request access to, correct,
            or delete any personal information that You have provided to Us.
          </p>
          <p className="mb-8">
            Please note, however, that We may need to retain certain information
            when we have a legal obligation or lawful basis to do so.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Disclosure of Your Personal Data
          </h3>
          <h4 className="text-lg font-semibold mb-2">Business Transactions</h4>
          <p className="mb-8">
            If the Company is involved in a merger, acquisition or asset sale,
            Your Personal Data may be transferred. We will provide notice before
            Your Personal Data is transferred and becomes subject to a different
            Privacy Policy.
          </p>
          <h4 className="text-lg font-semibold mb-2">Law enforcement</h4>
          <p className="mb-8">
            Under certain circumstances, the Company may be required to disclose
            Your Personal Data if required to do so by law or in response to
            valid requests by public authorities (e.g. a court or a government
            agency).
          </p>
          <h4 className="text-lg font-semibold mb-2">
            Other legal requirements
          </h4>
          <p className="mb-8">
            The Company may disclose Your Personal Data in the good faith belief
            that such action is necessary to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of the Company</li>
            <li>
              Prevent or investigate possible wrongdoing in connection with the
              Service
            </li>
            <li>
              Protect the personal safety of Users of the Service or the public
            </li>
            <li>Protect against legal liability</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Security of Your Personal Data
          </h3>
          <p className="mb-8">
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Children&apos;s Privacy
          </h2>
          <p className="mb-8">
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13. If You are a parent or guardian and You are
            aware that Your child has provided Us with Personal Data, please
            contact Us. If We become aware that We have collected Personal Data
            from anyone under the age of 13 without verification of parental
            consent, We take steps to remove that information from Our servers.
          </p>
          <p className="mb-8">
            If We need to rely on consent as a legal basis for processing Your
            information and Your country requires consent from a parent, We may
            require Your parent&apos;s consent before We collect and use that
            information.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Links to Other Websites
          </h2>
          <p className="mb-8">
            Our Service may contain links to other websites that are not
            operated by Us. If You click on a third party link, You will be
            directed to that third party&apos;s site. We strongly advise You to
            review the Privacy Policy of every site You visit.
          </p>
          <p className="mb-8">
            We have no control over and assume no responsibility for the
            content, privacy policies or practices of any third party sites or
            services.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Changes to this Privacy Policy
          </h2>
          <p className="mb-8">
            We may update Our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
          </p>
          <p className="mb-8">
            We will let You know via email and/or a prominent notice on Our
            Service, prior to the change becoming effective and update the
            &quot;Last updated&quot; date at the top of this Privacy Policy.
          </p>
          <p className="mb-8">
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-green-500">Contact Us</h2>
          <p className="mb-8">
            If you have any questions about this Privacy Policy, You can contact
            us:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>By email: ph1987@gmail.com</li>
          </ul>
        </div>
      )}

      {lang === "pt" && (
        <div className="max-w-5xl mx-auto p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2 text-green-500">
              Política de Privacidade
            </h1>
            <p className="text-sm text-gray-200">
              Última atualização: 03 de março de 2025
            </p>
          </header>
          <p className="mb-4">
            Esta Política de Privacidade descreve nossas políticas e
            procedimentos sobre a coleta, uso e divulgação de suas informações
            quando você utiliza o Serviço, e informa você sobre seus direitos de
            privacidade e como a lei o protege.
          </p>
          <p className="mb-8">
            Utilizamos seus dados pessoais para fornecer e melhorar o Serviço.
            Ao utilizar o Serviço, você concorda com a coleta e o uso de
            informações de acordo com esta Política de Privacidade.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Interpretação e Definições
          </h2>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Interpretação
          </h3>
          <p className="mb-8">
            As palavras cuja inicial é maiúscula têm significados definidos sob
            as seguintes condições. As definições a seguir terão o mesmo
            significado, independentemente de aparecerem no singular ou no
            plural.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Definições
          </h3>
          <p className="mb-4">Para os fins desta Política de Privacidade:</p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>
              <strong>Conta</strong> significa uma conta única criada para que
              você acesse nosso Serviço ou partes dele.
            </li>
            <li>
              <strong>Afiliado</strong> significa uma entidade que controla, é
              controlada por ou está sob controle comum com uma parte, onde
              &quot;controle&quot; significa a propriedade de 50% ou mais das
              ações, participação societária ou outros títulos com direito a
              voto para eleição de diretores ou outra autoridade gerencial.
            </li>
            <li>
              <strong>Empresa</strong> (referida como &quot;a Empresa&quot;,
              &quot;Nós&quot;, &quot;Nos&quot; ou &quot;Nosso&quot; neste
              Acordo) refere-se a My Money.
            </li>
            <li>
              <strong>Cookies</strong> são pequenos arquivos que são colocados
              no seu computador, dispositivo móvel ou qualquer outro dispositivo
              por um site, contendo os detalhes do seu histórico de navegação
              nesse site, entre outros usos.
            </li>
            <li>
              <strong>País</strong> refere-se a: Brazil
            </li>
            <li>
              <strong>Dispositivo</strong> significa qualquer dispositivo que
              pode acessar o Serviço, como um computador, um celular ou um
              tablet digital.
            </li>
            <li>
              <strong>Dados Pessoais</strong> são quaisquer informações que se
              relacionam a um indivíduo identificado ou identificável.
            </li>
            <li>
              <strong>Serviço</strong> refere-se ao Site.
            </li>
            <li>
              <strong>Prestador de Serviços</strong> significa qualquer pessoa
              física ou jurídica que processa os dados em nome da Empresa.
              Refere-se a empresas ou indivíduos terceirizados contratados pela
              Empresa para facilitar o Serviço, para fornecer o Serviço em nome
              da Empresa, para realizar serviços relacionados ao Serviço ou para
              auxiliar a Empresa na análise de como o Serviço é utilizado.
            </li>
            <li>
              <strong>Serviço de Mídia Social de Terceiros</strong> refere-se a
              qualquer site ou rede social através do qual um Usuário pode fazer
              login ou criar uma conta para utilizar o Serviço.
            </li>
            <li>
              <strong>Dados de Uso</strong> referem-se aos dados coletados
              automaticamente, seja gerados pelo uso do Serviço ou pela
              infraestrutura do Serviço em si (por exemplo, a duração de uma
              visita a uma página).
            </li>
            <li>
              <strong>Site</strong> refere-se a My Money, acessível de{" "}
              <a
                href="https://mymoney-omega.vercel.app/"
                rel="external nofollow noopener"
                target="_blank"
                className="text-green-500 hover:underline"
              >
                https://mymoney-omega.vercel.app/
              </a>
            </li>
            <li>
              <strong>Você</strong> significa o indivíduo que acessa ou utiliza
              o Serviço, ou a empresa, ou outra entidade legal em nome da qual
              esse indivíduo acessa ou utiliza o Serviço, conforme aplicável.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Coletando e Utilizando Seus Dados Pessoais
          </h2>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Tipos de Dados Coletados
          </h3>
          <h4 className="text-lg font-semibold mb-2">Dados Pessoais</h4>
          <p className="mb-8">
            Enquanto utiliza nosso Serviço, podemos solicitar que você nos
            forneça determinadas informações pessoalmente identificáveis que
            podem ser usadas para contatá-lo ou identificá-lo. As informações
            pessoalmente identificáveis podem incluir, mas não se limitam a:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Dados de Uso</li>
          </ul>
          <h4 className="text-lg font-semibold mb-2">Dados de Uso</h4>
          <p className="mb-8">
            Os Dados de Uso são coletados automaticamente ao utilizar o Serviço.
          </p>
          <p className="mb-8">
            Os Dados de Uso podem incluir informações como o endereço de
            Protocolo de Internet do seu dispositivo (por exemplo, endereço IP),
            tipo de navegador, versão do navegador, as páginas do nosso Serviço
            que você visita, o horário e a data da sua visita, o tempo gasto
            nessas páginas, identificadores únicos de dispositivo e outros dados
            de diagnóstico.
          </p>
          <p className="mb-8">
            Quando você acessa o Serviço por meio de um dispositivo móvel,
            podemos coletar determinadas informações automaticamente, incluindo,
            mas não se limitando ao tipo de dispositivo móvel que você utiliza,
            o ID único do seu dispositivo móvel, o endereço IP do seu
            dispositivo móvel, o sistema operacional do seu dispositivo móvel, o
            tipo de navegador móvel que você utiliza, identificadores únicos de
            dispositivo e outros dados de diagnóstico.
          </p>
          <p className="mb-8">
            Também podemos coletar informações que seu navegador envia sempre
            que você visita nosso Serviço ou quando você acessa o Serviço por
            meio de um dispositivo móvel.
          </p>
          <h4 className="text-lg font-semibold mb-2">
            Informações de Serviços de Mídia Social de Terceiros
          </h4>
          <p className="mb-8">
            A Empresa permite que você crie uma conta e faça login para utilizar
            o Serviço através dos seguintes Serviços de Mídia Social de
            Terceiros:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Google</li>
            <li>Facebook</li>
          </ul>
          <p className="mb-8">
            Se você decidir se registrar através ou nos conceder acesso a um
            Serviço de Mídia Social de Terceiros, podemos coletar dados pessoais
            que já estejam associados à sua conta nesse Serviço, como seu nome,
            endereço de e-mail e foto de perfil.
          </p>
          <p className="mb-8">
            Você também pode ter a opção de compartilhar informações adicionais
            com a Empresa através da sua conta no Serviço de Mídia Social de
            Terceiros. Se você optar por fornecer tais informações e Dados
            Pessoais, durante o registro ou de outra forma, estará dando à
            Empresa permissão para usá-los, compartilhá-los e armazená-los de
            maneira consistente com esta Política de Privacidade.
          </p>
          <h4 className="text-lg font-semibold mb-2">
            Tecnologias de Rastreamento e Cookies
          </h4>
          <p className="mb-8">
            Utilizamos cookies e tecnologias de rastreamento semelhantes para
            monitorar a atividade em nosso Serviço e armazenar determinadas
            informações. As tecnologias de rastreamento utilizadas são beacons,
            etiquetas e scripts para coletar e rastrear informações e para
            melhorar e analisar nosso Serviço. As tecnologias que utilizamos
            podem incluir:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>
              <strong>Cookies ou Cookies de Navegador.</strong> Um cookie é um
              pequeno arquivo colocado no seu dispositivo. Você pode instruir
              seu navegador a recusar todos os cookies ou a indicar quando um
              cookie está sendo enviado. No entanto, se você não aceitar
              cookies, pode não ser capaz de usar algumas partes do nosso
              Serviço. A menos que você tenha ajustado as configurações do seu
              navegador para recusar cookies, nosso Serviço pode utilizá-los.
            </li>
            <li>
              <strong>Balizas Web.</strong> Certas seções do nosso Serviço e
              nossos e-mails podem conter pequenos arquivos eletrônicos
              conhecidos como balizas web (também denominadas gifs
              transparentes, etiquetas de pixel e gifs de um único pixel) que
              permitem, por exemplo, à Empresa contar os usuários que visitaram
              essas páginas ou abriram um e-mail e obter outras estatísticas
              relacionadas ao site (por exemplo, registrar a popularidade de uma
              determinada seção e verificar a integridade do sistema e do
              servidor).
            </li>
          </ul>
          <p className="mb-8">
            Os cookies podem ser &quot;Persistentes&quot; ou &quot;de
            Sessão&quot;. Os cookies persistentes permanecem em seu computador
            pessoal ou dispositivo móvel quando você está offline, enquanto os
            cookies de sessão são excluídos assim que você fecha seu navegador.
            Você pode saber mais sobre cookies no artigo do site{" "}
            <a
              href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies"
              target="_blank"
              className="text-green-500 hover:underline"
            >
              TermsFeed
            </a>
            .
          </p>
          <p className="mb-8">
            Utilizamos tanto cookies de sessão quanto cookies persistentes para
            os fins descritos a seguir:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>
              <strong>Cookies Necessários / Essenciais</strong>
              <p>Tipo: Cookies de Sessão</p>
              <p>Administrado por: Nós</p>
              <p>
                Finalidade: Esses cookies são essenciais para fornecer a você os
                serviços disponíveis através do Site e para permitir que você
                utilize algumas de suas funcionalidades. Eles ajudam a
                autenticar os usuários e a prevenir o uso fraudulento de contas.
                Sem esses cookies, os serviços que você solicitou não podem ser
                fornecidos, e nós os utilizamos apenas para fornecer esses
                serviços.
              </p>
            </li>
            <br />
            <li>
              <strong>
                Política de Cookies / Cookies de Aceitação de Aviso
              </strong>
              <p>Tipo: Cookies Persistentes</p>
              <p>Administrado por: Nós</p>
              <p>
                Finalidade: Esses cookies identificam se os usuários aceitaram o
                uso de cookies no Site.
              </p>
            </li>
            <br />
            <li>
              <strong>Cookies de Funcionalidade</strong>
              <p>Tipo: Cookies Persistentes</p>
              <p>Administrado por: Nós</p>
              <p>
                Finalidade: Esses cookies nos permitem lembrar das escolhas que
                você faz ao utilizar o Site, como lembrar seus dados de login ou
                preferência de idioma. A finalidade desses cookies é
                proporcionar uma experiência mais personalizada e evitar que
                você tenha que reinserir suas preferências toda vez que utilizar
                o Site.
              </p>
            </li>
            <br />
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Uso dos Seus Dados Pessoais
          </h3>
          <p className="mb-8">
            A Empresa pode utilizar os Dados Pessoais para os seguintes fins:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>
              <strong>Para fornecer e manter nosso Serviço</strong>, inclusive
              para monitorar o uso do nosso Serviço.
            </li>
            <li>
              <strong>Para gerenciar sua Conta:</strong> para administrar seu
              cadastro como usuário do Serviço. Os Dados Pessoais que você
              fornece podem dar acesso a diferentes funcionalidades do Serviço
              que estão disponíveis para você como usuário registrado.
            </li>
            <li>
              <strong>Para contatá-lo:</strong> para contatá-lo por e-mail,
              chamadas telefônicas, SMS ou outras formas equivalentes de
              comunicação eletrônica, como notificações push de aplicativos
              móveis sobre atualizações ou comunicações informativas
              relacionadas às funcionalidades, produtos ou serviços contratados,
              incluindo atualizações de segurança, quando necessário ou razoável
              para sua implementação.
            </li>
            <li>
              <strong>Para gerenciar suas solicitações:</strong> para atender e
              gerenciar suas solicitações para nós.
            </li>
          </ul>
          <p className="mb-8">
            Podemos compartilhar suas informações pessoais nas seguintes
            situações:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>
              <strong>Com Prestadores de Serviço:</strong> podemos compartilhar
              suas informações pessoais com Prestadores de Serviço para
              monitorar e analisar o uso do nosso Serviço, para contatá-lo.
            </li>
            <li>
              <strong>Com o seu consentimento</strong>: podemos divulgar suas
              informações pessoais para qualquer outro fim com o seu
              consentimento.
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Retenção dos Seus Dados Pessoais
          </h3>
          <p className="mb-8">
            A Empresa reterá seus Dados Pessoais apenas pelo tempo necessário
            para os fins estabelecidos nesta Política de Privacidade. Reteremos
            e utilizaremos seus Dados Pessoais na medida necessária para cumprir
            nossas obrigações legais (por exemplo, se formos obrigados a reter
            seus dados para cumprir as leis aplicáveis), resolver disputas e
            fazer cumprir nossos acordos e políticas legais.
          </p>
          <p className="mb-8">
            A Empresa também reterá os Dados de Uso para fins de análise
            interna. Os Dados de Uso geralmente são retidos por um período mais
            curto, exceto quando esses dados são utilizados para fortalecer a
            segurança ou melhorar a funcionalidade do nosso Serviço, ou quando
            somos legalmente obrigados a reter esses dados por períodos mais
            longos.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Transferência dos Seus Dados Pessoais
          </h3>
          <p className="mb-8">
            Suas informações, incluindo os Dados Pessoais, são processadas nas
            instalações operacionais da Empresa e em quaisquer outros locais
            onde as partes envolvidas no processamento estejam situadas. Isso
            significa que essas informações podem ser transferidas para — e
            mantidas em — computadores localizados fora do seu estado,
            província, país ou outra jurisdição governamental, onde as leis de
            proteção de dados podem ser diferentes das da sua jurisdição.
          </p>
          <p className="mb-8">
            Seu consentimento a esta Política de Privacidade, seguido do envio
            dessas informações, representa sua concordância com essa
            transferência.
          </p>
          <p className="mb-8">
            A Empresa tomará todas as medidas razoáveis necessárias para
            garantir que seus dados sejam tratados de forma segura e de acordo
            com esta Política de Privacidade, e nenhuma transferência dos seus
            Dados Pessoais ocorrerá para uma organização ou país, a menos que
            existam controles adequados, incluindo a segurança dos seus dados e
            outras informações pessoais.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Exclusão dos Seus Dados Pessoais
          </h3>
          <p className="mb-8">
            Você tem o direito de excluir ou solicitar que auxiliemos na
            exclusão dos Dados Pessoais que coletamos sobre você.
          </p>
          <p className="mb-8">
            Nosso Serviço pode permitir que você exclua certas informações sobre
            você diretamente pelo Serviço.
          </p>
          <p className="mb-8">
            Você pode atualizar, modificar ou excluir suas informações a
            qualquer momento, fazendo login na sua Conta (se tiver uma) e
            acessando a seção de configurações da conta que permite gerenciar
            suas informações pessoais. Você também pode nos contatar para
            solicitar acesso, correção ou exclusão de qualquer informação
            pessoal que tenha fornecido.
          </p>
          <p className="mb-8">
            Por favor, note, no entanto, que podemos precisar reter certas
            informações quando tivermos uma obrigação legal ou fundamento
            jurídico para isso.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Divulgação dos Seus Dados Pessoais
          </h3>
          <h4 className="text-lg font-semibold mb-2">Transações Comerciais</h4>
          <p className="mb-8">
            Se a Empresa estiver envolvida em uma fusão, aquisição ou venda de
            ativos, seus Dados Pessoais poderão ser transferidos. Forneceremos
            um aviso antes que seus Dados Pessoais sejam transferidos e fiquem
            sujeitos a uma Política de Privacidade diferente.
          </p>
          <h4 className="text-lg font-semibold mb-2">Aplicação da lei</h4>
          <p className="mb-8">
            Em determinadas circunstâncias, a Empresa pode ser obrigada a
            divulgar seus Dados Pessoais se a lei o exigir ou em resposta a
            solicitações válidas de autoridades públicas (por exemplo, um
            tribunal ou uma agência governamental).
          </p>
          <h4 className="text-lg font-semibold mb-2">
            Outros requisitos legais
          </h4>
          <p className="mb-8">
            A Empresa pode divulgar seus Dados Pessoais de boa-fé, acreditando
            que tal ação é necessária para:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Cumprir uma obrigação legal</li>
            <li>Proteger e defender os direitos ou a propriedade da Empresa</li>
            <li>
              Prevenir ou investigar possíveis irregularidades relacionadas ao
              Serviço
            </li>
            <li>
              Proteger a segurança pessoal dos usuários do Serviço ou do público
            </li>
            <li>Proteger contra responsabilidade legal</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Segurança dos Seus Dados Pessoais
          </h3>
          <p className="mb-8">
            A segurança dos Seus Dados Pessoais é importante para nós, mas
            lembre-se de que nenhum método de transmissão pela Internet ou
            método de armazenamento eletrônico é 100% seguro. Embora nos
            esforcemos para utilizar meios comercialmente aceitáveis para
            proteger Seus Dados Pessoais, não podemos garantir sua segurança
            absoluta.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Privacidade das Crianças
          </h2>
          <p className="mb-8">
            Nosso Serviço não se destina a pessoas com menos de 13 anos. Não
            coletamos conscientemente informações pessoalmente identificáveis de
            ninguém com menos de 13 anos. Se você for pai ou responsável e
            souber que seu filho nos forneceu Dados Pessoais, entre em contato
            conosco. Se tomarmos conhecimento de que coletamos Dados Pessoais de
            alguém com menos de 13 anos sem a verificação do consentimento dos
            pais, tomaremos as medidas necessárias para remover essas
            informações de nossos servidores.
          </p>
          <p className="mb-8">
            Se precisarmos basear o processamento das suas informações no
            consentimento e seu país exigir o consentimento de um pai, podemos
            solicitar o consentimento dos seus responsáveis antes de coletar e
            utilizar essas informações.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Links para Outros Sites
          </h2>
          <p className="mb-8">
            Nosso Serviço pode conter links para outros sites que não são
            operados por nós. Se você clicar em um link de terceiros, será
            direcionado para o site desse terceiro. Recomendamos fortemente que
            você revise a Política de Privacidade de cada site que visitar.
          </p>
          <p className="mb-8">
            Não temos controle sobre e não assumimos responsabilidade pelo
            conteúdo, pelas políticas de privacidade ou pelas práticas de
            quaisquer sites ou serviços de terceiros.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Alterações a esta Política de Privacidade
          </h2>
          <p className="mb-8">
            Podemos atualizar nossa Política de Privacidade de tempos em tempos.
            Notificaremos você sobre quaisquer alterações publicando a nova
            Política de Privacidade nesta página.
          </p>
          <p className="mb-8">
            Informaremos você por e-mail e/ou através de um aviso destacado em
            nosso Serviço, antes que a alteração entre em vigor e atualizaremos
            a data de &quot;Última atualização&quot; no topo desta Política de
            Privacidade.
          </p>
          <p className="mb-8">
            Recomendamos que você revise esta Política de Privacidade
            periodicamente para verificar alterações. As alterações a esta
            Política de Privacidade entram em vigor quando são publicadas nesta
            página.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Contate-nos
          </h2>
          <p className="mb-8">
            Se você tiver alguma dúvida sobre esta Política de Privacidade, você
            pode nos contatar:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Por e-mail: ph1987@gmail.com</li>
          </ul>
        </div>
      )}

      {lang === "es" && (
        <div className="max-w-5xl mx-auto p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2 text-green-500">
              Política de Privacidad
            </h1>
            <p className="text-sm text-gray-200">
              Última actualización: 03 de marzo de 2025
            </p>
          </header>
          <p className="mb-4">
            Esta Política de Privacidad describe nuestras políticas y
            procedimientos sobre la recopilación, uso y divulgación de su
            información cuando utiliza el Servicio, y le informa sobre sus
            derechos de privacidad y cómo la ley lo protege.
          </p>
          <p className="mb-8">
            Utilizamos sus datos personales para proporcionar y mejorar el
            Servicio. Al utilizar el Servicio, usted acepta la recopilación y el
            uso de la información de acuerdo con esta Política de Privacidad.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Interpretación y Definiciones
          </h2>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Interpretación
          </h3>
          <p className="mb-8">
            Las palabras cuya inicial está en mayúscula tienen significados
            definidos bajo las siguientes condiciones. Las definiciones
            siguientes tendrán el mismo significado, independientemente de si
            aparecen en singular o en plural.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Definiciones
          </h3>
          <p className="mb-4">Para los fines de esta Política de Privacidad:</p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>
              <strong>Cuenta</strong> significa una cuenta única creada para que
              usted acceda a nuestro Servicio o a partes del mismo.
            </li>
            <li>
              <strong>Afiliado</strong> significa una entidad que controla, es
              controlada por o está bajo control común con una parte, donde
              &quot;control&quot; significa la propiedad del 50% o más de las
              acciones, participación de capital u otros valores con derecho a
              voto para la elección de directores u otra autoridad directiva.
            </li>
            <li>
              <strong>Empresa</strong> (denominada como &quot;la Empresa&quot;,
              &quot;Nosotros&quot;, &quot;Nos&quot; o &quot;Nuestro&quot; en
              este Acuerdo) se refiere a My Money.
            </li>
            <li>
              <strong>Cookies</strong> son pequeños archivos que se colocan en
              su computadora, dispositivo móvil o cualquier otro dispositivo por
              un sitio web, que contienen los detalles de su historial de
              navegación en dicho sitio, entre otros usos.
            </li>
            <li>
              <strong>País</strong> se refiere a: Brasil
            </li>
            <li>
              <strong>Dispositivo</strong> significa cualquier dispositivo que
              pueda acceder al Servicio, como una computadora, un teléfono móvil
              o una tableta digital.
            </li>
            <li>
              <strong>Datos Personales</strong> son cualquier información que se
              relaciona con un individuo identificado o identificable.
            </li>
            <li>
              <strong>Servicio</strong> se refiere al Sitio web.
            </li>
            <li>
              <strong>Proveedor de Servicios</strong> significa cualquier
              persona física o jurídica que procesa los datos en nombre de la
              Empresa. Se refiere a empresas o individuos terceros contratados
              por la Empresa para facilitar el Servicio, para proporcionar el
              Servicio en nombre de la Empresa, para realizar servicios
              relacionados con el Servicio o para asistir a la Empresa en el
              análisis de cómo se utiliza el Servicio.
            </li>
            <li>
              <strong>Servicio de Redes Sociales de Terceros</strong> se refiere
              a cualquier sitio web o red social a través del cual un Usuario
              puede iniciar sesión o crear una cuenta para utilizar el Servicio.
            </li>
            <li>
              <strong>Datos de Uso</strong> se refieren a los datos recopilados
              automáticamente, ya sea generados por el uso del Servicio o por la
              infraestructura del Servicio en sí (por ejemplo, la duración de
              una visita a una página).
            </li>
            <li>
              <strong>Sitio web</strong> se refiere a My Money, accesible desde{" "}
              <a
                href="https://mymoney-omega.vercel.app/"
                rel="external nofollow noopener"
                target="_blank"
                className="text-green-500 hover:underline"
              >
                https://mymoney-omega.vercel.app/
              </a>
            </li>
            <li>
              <strong>Usted</strong> significa el individuo que accede o utiliza
              el Servicio, o la empresa, u otra entidad legal en nombre de la
              cual dicho individuo accede o utiliza el Servicio, según
              corresponda.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Recopilación y Uso de sus Datos Personales
          </h2>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Tipos de Datos Recopilados
          </h3>
          <h4 className="text-lg font-semibold mb-2">Datos Personales</h4>
          <p className="mb-8">
            Mientras utiliza nuestro Servicio, podemos solicitarle que nos
            proporcione cierta información personalmente identificable que pueda
            ser utilizada para contactarlo o identificarlo. La información
            personalmente identificable puede incluir, pero no se limita a:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Datos de Uso</li>
          </ul>
          <h4 className="text-lg font-semibold mb-2">Datos de Uso</h4>
          <p className="mb-8">
            Los Datos de Uso se recopilan automáticamente al utilizar el
            Servicio.
          </p>
          <p className="mb-8">
            Los Datos de Uso pueden incluir información como la dirección de
            Protocolo de Internet de su dispositivo (por ejemplo, dirección IP),
            tipo de navegador, versión del navegador, las páginas de nuestro
            Servicio que usted visita, la hora y la fecha de su visita, el
            tiempo empleado en esas páginas, identificadores únicos de
            dispositivo y otros datos de diagnóstico.
          </p>
          <p className="mb-8">
            Cuando accede al Servicio a través de un dispositivo móvil, podemos
            recopilar automáticamente cierta información, incluyendo, pero no
            limitándose a, el tipo de dispositivo móvil que utiliza, el ID único
            de su dispositivo móvil, la dirección IP de su dispositivo móvil, el
            sistema operativo de su dispositivo móvil, el tipo de navegador de
            Internet móvil que utiliza, identificadores únicos de dispositivo y
            otros datos de diagnóstico.
          </p>
          <p className="mb-8">
            También podemos recopilar la información que su navegador envía cada
            vez que visita nuestro Servicio o cuando accede al Servicio a través
            de un dispositivo móvil.
          </p>
          <h4 className="text-lg font-semibold mb-2">
            Información de Servicios de Redes Sociales de Terceros
          </h4>
          <p className="mb-8">
            La Empresa le permite crear una cuenta e iniciar sesión para
            utilizar el Servicio a través de los siguientes Servicios de Redes
            Sociales de Terceros:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Google</li>
            <li>Facebook</li>
          </ul>
          <p className="mb-8">
            Si decide registrarse o concedernos acceso a un Servicio de Redes
            Sociales de Terceros, podemos recopilar datos personales que ya
            están asociados con la cuenta de dicho Servicio, como su nombre,
            dirección de correo electrónico y foto de perfil.
          </p>
          <p className="mb-8">
            También puede tener la opción de compartir información adicional con
            la Empresa a través de su cuenta en el Servicio de Redes Sociales de
            Terceros. Si decide proporcionar dicha información y Datos
            Personales, durante el registro o de otra forma, estará otorgando a
            la Empresa permiso para usarlos, compartirlos y almacenarlos de
            manera consistente con esta Política de Privacidad.
          </p>
          <h4 className="text-lg font-semibold mb-2">
            Tecnologías de Rastreo y Cookies
          </h4>
          <p className="mb-8">
            Utilizamos cookies y tecnologías de rastreo similares para
            monitorear la actividad en nuestro Servicio y almacenar cierta
            información. Las tecnologías de rastreo utilizadas son beacons,
            etiquetas y scripts para recopilar y rastrear información, y para
            mejorar y analizar nuestro Servicio. Las tecnologías que utilizamos
            pueden incluir:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>
              <strong>Cookies o Cookies de Navegador.</strong> Un cookie es un
              pequeño archivo colocado en su dispositivo. Puede instruir a su
              navegador a rechazar todos los cookies o a indicar cuando un
              cookie está siendo enviado. Sin embargo, si no acepta los cookies,
              es posible que no pueda usar algunas partes de nuestro Servicio. A
              menos que haya ajustado la configuración de su navegador para
              rechazar cookies, nuestro Servicio puede utilizarlos.
            </li>
            <li>
              <strong>Balizas Web.</strong> Ciertas secciones de nuestro
              Servicio y nuestros correos electrónicos pueden contener pequeños
              archivos electrónicos conocidos como balizas web (también
              denominadas gifs transparentes, etiquetas de píxel y gifs de un
              solo píxel) que permiten, por ejemplo, a la Empresa contar a los
              usuarios que han visitado esas páginas o abierto un correo
              electrónico, y obtener otras estadísticas relacionadas con el
              sitio (por ejemplo, registrar la popularidad de una sección
              determinada y verificar la integridad del sistema y del servidor).
            </li>
          </ul>
          <p className="mb-8">
            Los cookies pueden ser &quot;Persistentes&quot; o &quot;de
            Sesión&quot;. Los cookies persistentes permanecen en su computadora
            personal o dispositivo móvil cuando está desconectado, mientras que
            los cookies de sesión se eliminan tan pronto como cierra su
            navegador. Puede obtener más información sobre los cookies en el
            artículo del{" "}
            <a
              href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies"
              target="_blank"
              className="text-green-500 hover:underline"
            >
              TermsFeed
            </a>
            .
          </p>
          <p className="mb-8">
            Utilizamos tanto cookies de sesión como cookies persistentes para
            los fines descritos a continuación:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>
              <strong>Cookies Necesarios / Esenciales</strong>
              <p>Tipo: Cookies de Sesión</p>
              <p>Administrado por: Nosotros</p>
              <p>
                Finalidad: Estos cookies son esenciales para proporcionarle los
                servicios disponibles a través del Sitio y para permitirle
                utilizar algunas de sus funcionalidades. Ayudan a autenticar a
                los usuarios y a prevenir el uso fraudulento de las cuentas. Sin
                estos cookies, los servicios que usted ha solicitado no pueden
                ser proporcionados, y nosotros los utilizamos únicamente para
                brindarle dichos servicios.
              </p>
            </li>
            <br />
            <li>
              <strong>
                Política de Cookies / Cookies de Aceptación de Aviso
              </strong>
              <p>Tipo: Cookies Persistentes</p>
              <p>Administrado por: Nosotros</p>
              <p>
                Finalidad: Estos cookies identifican si los usuarios han
                aceptado el uso de cookies en el Sitio.
              </p>
            </li>
            <br />
            <li>
              <strong>Cookies de Funcionalidad</strong>
              <p>Tipo: Cookies Persistentes</p>
              <p>Administrado por: Nosotros</p>
              <p>
                Finalidad: Estos cookies nos permiten recordar las elecciones
                que usted hace al utilizar el Sitio, como recordar sus datos de
                inicio de sesión o preferencia de idioma. La finalidad de estos
                cookies es proporcionarle una experiencia más personalizada y
                evitar que tenga que reingresar sus preferencias cada vez que
                utiliza el Sitio.
              </p>
            </li>
            <br />
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Uso de sus Datos Personales
          </h3>
          <p className="mb-8">
            La Empresa puede utilizar los Datos Personales para los siguientes
            fines:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>
              <strong>Para proporcionar y mantener nuestro Servicio</strong>,
              incluyendo el monitoreo del uso del Servicio.
            </li>
            <li>
              <strong>Para gestionar su Cuenta:</strong> para administrar su
              registro como usuario del Servicio. Los Datos Personales que usted
              proporciona pueden darle acceso a diferentes funcionalidades del
              Servicio disponibles para usted como usuario registrado.
            </li>
            <li>
              <strong>Para contactarlo:</strong> para contactarlo por correo
              electrónico, llamadas telefónicas, SMS u otras formas equivalentes
              de comunicación electrónica, como las notificaciones push de una
              aplicación móvil sobre actualizaciones o comunicaciones
              informativas relacionadas con las funcionalidades, productos o
              servicios contratados, incluyendo las actualizaciones de
              seguridad, cuando sea necesario o razonable para su
              implementación.
            </li>
            <li>
              <strong>Para gestionar sus solicitudes:</strong> para atender y
              gestionar sus solicitudes hacia nosotros.
            </li>
          </ul>
          <p className="mb-8">
            Podemos compartir su información personal en las siguientes
            situaciones:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>
              <strong>Con Proveedores de Servicios:</strong> podemos compartir
              su información personal con Proveedores de Servicios para
              monitorear y analizar el uso de nuestro Servicio, y para
              contactarlo.
            </li>
            <li>
              <strong>Con su consentimiento</strong>: podemos divulgar su
              información personal para cualquier otro fin con su
              consentimiento.
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Retención de sus Datos Personales
          </h3>
          <p className="mb-8">
            La Empresa retendrá sus Datos Personales únicamente por el tiempo
            necesario para los fines establecidos en esta Política de
            Privacidad. Retendremos y utilizaremos sus Datos Personales en la
            medida necesaria para cumplir con nuestras obligaciones legales (por
            ejemplo, si estamos obligados a retener sus datos para cumplir con
            las leyes aplicables), resolver disputas y hacer cumplir nuestros
            acuerdos y políticas legales.
          </p>
          <p className="mb-8">
            La Empresa también retendrá los Datos de Uso para fines de análisis
            interno. Los Datos de Uso generalmente se retienen por un período
            más corto, excepto cuando estos datos se utilizan para fortalecer la
            seguridad o mejorar la funcionalidad de nuestro Servicio, o cuando
            estamos legalmente obligados a retener dichos datos por períodos más
            largos.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Transferencia de sus Datos Personales
          </h3>
          <p className="mb-8">
            Su información, incluidos los Datos Personales, es procesada en las
            oficinas operativas de la Empresa y en cualquier otro lugar donde se
            encuentren las partes involucradas en el procesamiento. Esto
            significa que dicha información puede ser transferida a — y
            mantenida en — computadoras ubicadas fuera de su estado, provincia,
            país u otra jurisdicción gubernamental, donde las leyes de
            protección de datos pueden diferir de las de su jurisdicción.
          </p>
          <p className="mb-8">
            Su consentimiento a esta Política de Privacidad, seguido del envío
            de dicha información, representa su acuerdo con esa transferencia.
          </p>
          <p className="mb-8">
            La Empresa tomará todas las medidas razonables necesarias para
            garantizar que sus datos sean tratados de forma segura y de acuerdo
            con esta Política de Privacidad, y ninguna transferencia de sus
            Datos Personales se realizará a una organización o país, a menos que
            existan controles adecuados, incluyendo la seguridad de sus datos y
            otra información personal.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Eliminación de sus Datos Personales
          </h3>
          <p className="mb-8">
            Usted tiene el derecho de eliminar o solicitar que le ayudemos a
            eliminar los Datos Personales que hemos recopilado sobre usted.
          </p>
          <p className="mb-8">
            Nuestro Servicio puede permitirle eliminar cierta información sobre
            usted directamente a través del Servicio.
          </p>
          <p className="mb-8">
            Puede actualizar, modificar o eliminar su información en cualquier
            momento iniciando sesión en su Cuenta, si dispone de una, y
            accediendo a la sección de configuración de la cuenta que le permite
            gestionar su información personal. También puede contactarnos para
            solicitar acceso, corrección o eliminación de cualquier información
            personal que haya proporcionado.
          </p>
          <p className="mb-8">
            Tenga en cuenta, sin embargo, que podemos necesitar retener cierta
            información cuando tengamos una obligación legal o fundamento
            jurídico para ello.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Divulgación de sus Datos Personales
          </h3>
          <h4 className="text-lg font-semibold mb-2">
            Transacciones Comerciales
          </h4>
          <p className="mb-8">
            Si la Empresa está involucrada en una fusión, adquisición o venta de
            activos, sus Datos Personales pueden ser transferidos.
            Proporcionaremos un aviso antes de que sus Datos Personales sean
            transferidos y queden sujetos a una Política de Privacidad
            diferente.
          </p>
          <h4 className="text-lg font-semibold mb-2">Aplicación de la ley</h4>
          <p className="mb-8">
            En determinadas circunstancias, la Empresa puede estar obligada a
            divulgar sus Datos Personales si la ley lo exige o en respuesta a
            solicitudes válidas de autoridades públicas (por ejemplo, un
            tribunal o una agencia gubernamental).
          </p>
          <h4 className="text-lg font-semibold mb-2">
            Otros requisitos legales
          </h4>
          <p className="mb-8">
            La Empresa puede divulgar sus Datos Personales de buena fe cuando
            crea que tal acción es necesaria para:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Cumplir con una obligación legal</li>
            <li>
              Proteger y defender los derechos o la propiedad de la Empresa
            </li>
            <li>
              Prevenir o investigar posibles irregularidades relacionadas con el
              Servicio
            </li>
            <li>
              Proteger la seguridad personal de los usuarios del Servicio o del
              público
            </li>
            <li>Proteger contra la responsabilidad legal</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            Seguridad de sus Datos Personales
          </h3>
          <p className="mb-8">
            La seguridad de sus Datos Personales es importante para nosotros,
            pero recuerde que ningún método de transmisión por Internet o de
            almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por
            utilizar medios comercialmente aceptables para proteger sus Datos
            Personales, no podemos garantizar su seguridad absoluta.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Privacidad Infantil
          </h2>
          <p className="mb-8">
            Nuestro Servicio no está dirigido a personas menores de 13 años. No
            recopilamos conscientemente información personalmente identificable
            de nadie menor de 13 años. Si usted es padre o tutor y sabe que su
            hijo nos ha proporcionado Datos Personales, contáctenos. Si nos
            enteramos de que hemos recopilado Datos Personales de alguien menor
            de 13 años sin la verificación del consentimiento de los padres,
            tomaremos las medidas necesarias para eliminar esa información de
            nuestros servidores.
          </p>
          <p className="mb-8">
            Si necesitamos basar el procesamiento de su información en el
            consentimiento y su país requiere el consentimiento de un padre,
            podemos solicitar el consentimiento de sus tutores antes de
            recopilar y utilizar dicha información.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Enlaces a Otros Sitios Web
          </h2>
          <p className="mb-8">
            Nuestro Servicio puede contener enlaces a otros sitios web que no
            son operados por nosotros. Si hace clic en un enlace de un tercero,
            será dirigido al sitio de ese tercero. Le recomendamos
            encarecidamente que revise la Política de Privacidad de cada sitio
            que visite.
          </p>
          <p className="mb-8">
            No tenemos control ni asumimos responsabilidad por el contenido, las
            políticas de privacidad o las prácticas de cualquier sitio o
            servicio de terceros.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Cambios en esta Política de Privacidad
          </h2>
          <p className="mb-8">
            Podemos actualizar nuestra Política de Privacidad de vez en cuando.
            Le notificaremos sobre cualquier cambio publicando la nueva Política
            de Privacidad en esta página.
          </p>
          <p className="mb-8">
            Le informaremos por correo electrónico y/o mediante un aviso
            destacado en nuestro Servicio, antes de que el cambio entre en
            vigor, y actualizaremos la fecha de &quot;Última actualización&quot;
            en la parte superior de esta Política de Privacidad.
          </p>
          <p className="mb-8">
            Se le recomienda revisar esta Política de Privacidad periódicamente
            para verificar cambios. Los cambios en esta Política de Privacidad
            entran en vigor cuando se publican en esta página.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Contáctenos
          </h2>
          <p className="mb-8">
            Si tiene alguna pregunta sobre esta Política de Privacidad, puede
            contactarnos:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Por correo electrónico: ph1987@gmail.com</li>
          </ul>
        </div>
      )}
      <footer className="bg-gray-800 py-4 text-gray-400 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center">
          <div className="hidden md:block"></div>
          <p className="text-sm text-center">
            © {new Date().getFullYear()} {translation.MY_MONEY_FOOTER}
          </p>
          <div className="mt-4 md:mt-0 text-center md:text-right mr-10">
            <a
              href="/privacy-policy"
              className="text-sm text-green-500 hover:text-green-600"
            >
              {translation.PRIVACY_POLICY}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
