# DoT: Domain Tools 🕵️‍♂️🌐

A simple, TypeScript-based open-source library for checking the availability of domain names. Designed to work in Node.js and browser environments, DoT is a small step towards exploring the world of Computer Networks.

## 📖 Introduction

DoT (Domain Tools) is a lightweight library that answers one straightforward question: **Is a domain available or not?** Whether you're building a domain registration tool, automating domain checks, or exploring networking concepts, DoT has you covered.

## 🌟 Inspiration & Problem Domain

Computer Networks is a fascinating field of Computer Science that underpins much of modern technology. Though it’s an area I’ve always been passionate about, my current responsibilities leave little time for deep dives into books and theoretical learning. Instead, I’m building projects to explore the practical side of Computer Networks. DoT is the first project in this series.

## 🚀 Usage

DoT is easy to integrate into your Node.js or browser-based applications. Here's a quick example:

### Node.js Example

```typescript
import { fetchDomainInfo } from "dot";

(async () => {
  const domain = "example.com";
  const domainInfo = await fetchDomainInfo(domain);

  if (domainInfo.isAvailable) {
    console.log(`${domain} is available! 🎉`);
  } else {
    console.log(`${domain} is taken. 😢`);
    console.log("Domain details:", domainInfo);
  }
})();
```

### Browser Example

```html
<script type="module">
  import { fetchDomainInfo } from "https://cdn.example.com/dot.js";

  const domain = "example.com";
  fetchDomainInfo(domain).then((domainInfo) => {
    if (domainInfo.isAvailable) {
      console.log(`${domain} is available! 🎉`);
    } else {
      console.log(`${domain} is taken. 😢`);
      console.log("Domain details:", domainInfo);
    }
  });
</script>
```

## 🛠 Setup

### Install the Package

To use DoT, you need Node.js or a modern browser environment.

```bash
npm install dot
```

Or use a CDN for browsers:

```html
<script src="https://cdn.example.com/dot.js"></script>
```

---

## ✅ Run Tests

DoT includes unit tests to ensure correctness. Run the tests locally after cloning the repository:

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/dot.git
   cd dot
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the tests:
   ```bash
   npm test
   ```

## 🤝 Contributions

Contributions are welcome! If you'd like to improve DoT or add new features:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature-name'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

## 📜 License

DoT is licensed under the [MIT License](LICENSE).

Enjoy exploring Computer Networks with DoT! 🌐✨
