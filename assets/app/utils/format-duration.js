/**
 * Nanocloud, a comprehensive platform to turn any application into a cloud
 * solution.
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

export default function formatDuration(value) {
  
  if (value < 60) {
    return Number(value) + ' s';
  }
  if (value < (60 * 60)) {
    return Number(value/60).toFixed(2) + ' min';
  }
  if (value < (60 * 60 * 60)) {
    return Number(value/60/60).toFixed(2) + ' h';
  }
  return Number(value/60/60/60).toFixed(2) + ' d';
}
