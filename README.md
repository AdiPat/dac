# DAC: Domain Availability Checker 🕵️‍♂️🌐

A simple, TypeScript-based open-source library for checking the availability of domain names. Designed to work in Node.js and browser environments, DAC is a small step towards exploring the world of Computer Networks.

## 📖 Introduction

DAC (Domain Availability Checker) is a lightweight library that answers one straightforward question: **Is a domain available or not?** Whether you're building a domain registration tool, automating domain checks, or exploring networking concepts, DAC has you covered.

## 🌟 Inspiration & Problem Domain

Computer Networks is a fascinating field of Computer Science that underpins much of modern technology. Though it’s an area I’ve always been passionate about, my current responsibilities leave little time for deep dives into books and theoretical learning. Instead, I’m building projects to explore the practical side of Computer Networks. DAC is the first project in this series.

## 🚀 Usage

DAC is easy to integrate into your Node.js or browser-based applications. Here's a quick example:

### Node.js Example

```typescript
import { checkDomainAvailability } from "dac";

(async () => {
  const domain = "example.com";
  const isAvailable = await checkDomainAvailability(domain);

  if (isAvailable) {
    console.log(`${domain} is available! 🎉`);
  } else {
    console.log(`${domain} is taken. 😢`);
  }
})();
```

### Browser Example

```html
<script type="module">
  import { checkDomainAvailability } from "https://cdn.example.com/dac.js";

  const domain = "example.com";
  checkDomainAvailability(domain).then((isAvailable) => {
    if (isAvailable) {
      console.log(`${domain} is available! 🎉`);
    } else {
      console.log(`${domain} is taken. 😢`);
    }
  });
</script>
```

## 🛠 Setup

### Install the Package

To use DAC, you need Node.js or a modern browser environment.

```bash
npm install dac
```

Or use a CDN for browsers:

```html
<script src="https://cdn.example.com/dac.js"></script>
```

---

## ✅ Run Tests

DAC includes unit tests to ensure correctness. Run the tests locally after cloning the repository:

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/dac.git
   cd dac
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

Contributions are welcome! If you'd like to improve DAC or add new features:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature-name'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

## 📜 License

DAC is licensed under the [MIT License](LICENSE).

Enjoy exploring Computer Networks with DAC! 🌐✨
