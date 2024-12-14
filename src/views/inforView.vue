<style scoped>
</style>
<template>
    <div class="max-w-md mx-auto mt-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6">
      <div class="flex flex-col items-center">
        <img
            :src="organizerInfo.profilePicture"
            alt="Profile Picture"
            class="w-24 h-24 mb-4 rounded-full shadow-lg"
        />
        <h2 class="text-lg font-bold text-gray-900 dark:text-white">
          {{ organizerInfo.firstName }} {{ organizerInfo.lastName }}
        </h2>
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ organizerInfo.position }}</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ organizerInfo.company }}</p>
      </div>

      <div class="mt-6 text-left">
        <p class="text-sm text-gray-700 dark:text-gray-300">
          <strong>อีเมล:</strong> <a href="mailto:{{ organizerInfo.email }}" class="text-blue-500 hover:underline">{{ organizerInfo.email }}</a>
        </p>
        <p class="text-sm text-gray-700 dark:text-gray-300 mt-2">
          <strong>มือถือ:</strong> <a href="tel:{{ organizerInfo.phone }}" class="text-blue-500 hover:underline">{{ organizerInfo.phone }}</a>
        </p>
<!--        <p class="text-sm text-gray-700 dark:text-gray-300 mt-2">-->
<!--          <strong>Company:</strong>-->
<!--          <a :href="organizerInfo.companyWebsite" target="_blank" class="text-blue-500 hover:underline">{{ organizerInfo.company }}</a>-->
<!--        </p>-->
      </div>

      <div class="mt-4 flex justify-center space-x-4">
        <a
            v-for="(link, platform) in organizerInfo.socialLinks"
            :key="platform"
            :href="link"
            target="_blank"
            class="text-gray-500 hover:text-blue-500"
        >
          <i :class="getSocialIconClass(platform)" class="text-xl"></i>
        </a>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      organizerInfo: {
        firstName: "สุริโย",
        lastName: "โดดิด่อง",
        position: "Project Manager",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        company: "TechCorp Ltd.",
        companyWebsite: "https://www.techcorp.com",
        profilePicture: "/uploads/images/Default.png",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/johndoe",
          github: "https://github.com/johndoe",
          twitter: "https://twitter.com/johndoe"
        }
      }
    };
  },
  methods: {
    getSocialIconClass(platform) {
      const icons = {
        linkedin: "fab fa-linkedin",
        github: "fab fa-github",
        twitter: "fab fa-twitter"
      };
      return icons[platform] || "fas fa-link";
    }
  }
};
</script>