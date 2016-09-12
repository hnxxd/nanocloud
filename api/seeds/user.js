/**
 * Nanocloud turns any traditional software into a cloud solution, without
 * changing or redeveloping existing source code.
 *
 * Copyright (C) 2016 Nanocloud Software
 *
 * This file is part of Nanocloud.
 *
 * Nanocloud is free software; you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * Nanocloud is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General
 * Public License
 * along with this program.  If not, see
 * <http://www.gnu.org/licenses/>.
 */

const bcrypt = require('bcryptjs');

function seed(knex) {
  const password = bcrypt.hashSync('admin', 10);

  return knex.raw(`
    INSERT INTO "user" (
      "id",
      "firstName",
      "lastName",
      "hashedPassword",
      "email",
      "isAdmin",
      "createdAt", "updatedAt"
    ) VALUES (
      :id, :firstName, :lastName, :password,
      :email, :isAdmin,
      NOW(), NOW()
    )
    ON CONFLICT DO NOTHING
  `, {
    id: 'aff17b8b-bf91-40bf-ace6-6dfc985680bb',
    firstName: 'Admin',
    lastName: 'Nanocloud',
    password: password,
    email: 'admin@nanocloud.com',
    isAdmin: true
  });
}

module.exports = { seed };