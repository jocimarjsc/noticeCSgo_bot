class CreateButtons {
  async execute() {
    const reply_markup = {
      one_time_keyboard: true,
      keyboard: [
        [
          {
            text: "🏆 Ranking",
          },
          {
            text: "📣 News",
          },
        ],
        [
          {
            text: "🎥 Live",
          },
          {
            text: "🤼‍♂️ Matches",
          },
          {
            text: "👨‍👩‍👧‍👦 Teams",
          },
        ],
        ["❌ Cancelar"],
      ],
    };

    return reply_markup;
  }
}

export default new  CreateButtons ;
