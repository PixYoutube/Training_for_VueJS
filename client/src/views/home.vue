<script setup>
const userName = "DevNetwork"

const messages = [
  {
    uuid: "1",
    author: "DevNetwork",
    content: "Bonjour !",
    date: "Il y a 5 minutes"
  },
  {
    uuid: "2",
    author: "Simple",
    content: "Bonjour !",
    date: "Il y a 3 minutes"
  },
  {
    uuid: "3",
    author: "DevNetwork",
    content: "Cv ?",
    date: "Il y a 1 minute"
  },
]
</script>
<template>
  <main id="Home">
    <section id="messages">
      <div id="message" v-for="(msg, index) in messages" :key="index">
        <p class="author">{{ msg.author }}</p>
        <p class="content">{{ msg.content }}</p>
        <p class="date">{{ msg.date }}</p>
      </div>
    </section>
    <section id="Form">
      <form>
        <textarea placeholder="Votre message"></textarea>
        <input id="send" type="submit" value="Envoyer">
      </form>
    </section>
  </main>
</template>

<style scoped>
main#Home {
  width: 100%;
  height: calc(100vh - 140px);
}

main#Home section#messages {
  margin: 50px;
  width: calc(100% - 100px);
  height: 90%;
}

main#Home section#messages div#message{
  width: 100%;
  margin-bottom: 20px;
  background-color: rgb(210, 209, 209);
  border-radius: 10px;
  padding: 10px;
}

main#Home section#messages div#message p.author {
  font-size: 20px;
  margin-bottom: 10px;
}

main#Home section#messages div#message p.content {
  margin-left: 20px;
  margin-bottom: 5px;
}

main#Home section#messages div#message p.date {
  opacity: 0.5;
  font-size: 10px;
}

main#Home section#Form {
  position: absolute;
  bottom: 10px;
  left: 50px;
  width: calc(100% - 50px);
}

main#Home section#Form form {
  display: flex;
  align-items: center;
}

main#Home section#Form form textarea {
  width: 80%;
  height: 60px;
  border: none;
  resize: none;
  border-radius: 10px;
  padding-left: 20px;
  padding-top: 10px;
}

main#Home section#Form form input#send {
  margin-left: 30px;
  cursor: pointer;
  width: 125px;
  height: 35px;
  background: rgb(0,21,203);
  background: -moz-linear-gradient(170deg, rgba(0,21,203,1) 33%, rgba(1,117,231,1) 76%);
  background: -webkit-linear-gradient(170deg, rgba(0,21,203,1) 33%, rgba(1,117,231,1) 76%);
  background: linear-gradient(170deg, rgba(0,21,203,1) 33%, rgba(1,117,231,1) 76%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0015cb",endColorstr="#0175e7",GradientType=1);
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size: 15px;
}
</style>