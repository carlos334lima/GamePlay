export type GuildProps = {
  id: string;
  owner: true;
  name: string;
  icon: string | null;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};
